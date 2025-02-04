import { Button, Container } from '@mui/material';
import { FirstForm } from '../forms/first';
import { SecondForm } from '../forms/second';
import { ThirdForm } from '../forms/third';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormType } from '../schemas/schema';
import { getAppOnlyBearerToken, getSharePointData, saveToSharePointAsync, updateSharePointAsync } from '../services/graph.service';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mapData } from '../helpers/mapdata';
import SuccessModal from '../components/success-modal';
import { toast } from 'react-toastify';

function Root() {
  const param = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(param.id ? true : false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [saved, setSaved] = useState({
    valid: false,
    id: ''
  })
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  })

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true)
      const token = await getAppOnlyBearerToken()
      const data = await getSharePointData(token.access_token, param.id as string)
      form.reset(mapData(data))
      setIsLoading(false)
    } catch (error) {
      console.error(error)
      toast.error("error unable to load form")
      if ((error as Error).message.includes("not found")) {
        navigate('/')
      }
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    if (param.id) {
      fetchData()
    }
  }, [])

  const onSubmit = async (data: FormType) => {
    try {
      setIsSubmitting(true)
      const token = await getAppOnlyBearerToken()
      if (param.id) {
        await updateSharePointAsync(param.id, data, token.access_token)
      } else {
        const response = await saveToSharePointAsync(data, token.access_token)
        setSaved({valid: true, id: response.id})
      }
      toast.success("Saved successfully")
      setIsSubmitting(false)
    } catch (error) {
      console.error(error)
      toast.error((error as Error).message)
      setIsSubmitting(false)
    }
  }

  return (
    <>
    {!param.id && <SuccessModal open={saved.valid} id={saved.id} />}
    {isLoading ? <div>Loading...</div> : (
      <form onSubmit={form.handleSubmit(onSubmit, (e) => {
        if (Object.keys(e).length) {
          toast.error("Some fields didn't pass validation—please correct them and try again.")
        }
      })}>
        <FirstForm form={form} />
        <SecondForm form={form} />
        <ThirdForm form={form} />

        <Container maxWidth="md" sx={{pb: 4}}>
          <Button disabled={isSubmitting} loading={isSubmitting}  type="submit" variant="contained" color="primary">Submit</Button>
        </Container>
      </form>
    )}
    </>
  )
}

export default Root
