import { Button, Container } from '@mui/material';
import { FirstForm } from '../forms/first';
import { SecondForm } from '../forms/second';
import { ThirdForm } from '../forms/third';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import ReCAPTCHA from "react-google-recaptcha";
import { FormSchema, FormType } from '../schemas/schema';
import { getAppOnlyBearerToken, getSharePointData, saveToSharePointAsync, updateSharePointAsync } from '../services/graph.service';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { mapData } from '../helpers/mapdata';
import SuccessModal from '../components/success-modal';
import { toast } from 'react-toastify';
import { Header } from '../components/header';
import { verifyCaptchaAsync } from '../services/captcha.service';

function Root() {
  const param = useParams()
  const navigate = useNavigate()
  const [captchaToken, setCaptchaToken] = useState("");
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
      if (!captchaToken) {
        throw new Error("captcha is required");
      }

      await verifyCaptchaAsync(captchaToken)
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

  const handleCaptchaChange = (token: string | null) => {
    if (token) setCaptchaToken(token);
  };

  return (
    <>
    {!param.id && <SuccessModal open={saved.valid} id={saved.id} />}
    {isLoading ? <div>Loading...</div> : (
      <Container maxWidth="md" sx={{py: 4}}>
        <Header />
        <form onSubmit={form.handleSubmit(onSubmit, (e) => {
          if (Object.keys(e).length) {
            toast.error("Some fields didn't pass validation—please correct them and try again.")
          }
        })}>
          <FirstForm form={form} />
          <SecondForm form={form} />
          <ThirdForm form={form} />

          <ReCAPTCHA
            sitekey="6LeO-WsmAAAAAPGv5ZldEjlIMAE3gmhSAV_znmlX"
            onChange={handleCaptchaChange}
          />

          <Button sx={{mt: 4}} disabled={isSubmitting} loading={isSubmitting}  type="submit" variant="contained" color="primary">Submit</Button>
        </form>
      </Container>
    )}
    </>
  )
}

export default Root
