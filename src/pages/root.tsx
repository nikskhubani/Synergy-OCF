import { Button, Container } from '@mui/material';
import { FirstForm } from '../forms/first';
import { SecondForm } from '../forms/second';
import { ThirdForm } from '../forms/third';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormType } from '../schemas/schema';
import { getAppOnlyBearerToken, getSharePointData, saveToSharePointAsync } from '../services/graph.service';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { mapData } from '../helpers/mapdata';

function Root() {
  const param = useParams()
  const [isLoading, setIsLoading] = useState(param.id ? true : false)
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
      const token = await getAppOnlyBearerToken()
      await saveToSharePointAsync(data, token.access_token)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
    {isLoading ? <div>Loading...</div> : (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FirstForm form={form} />
        <SecondForm form={form} />
        <ThirdForm form={form} />

        <Container maxWidth="md" sx={{pb: 4}}>
          <Button  type="submit" variant="contained" color="primary">Submit</Button>
        </Container>
      </form>
    )}
    </>
  )

  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<PageLayout />}>
  //         {otherRoutes}
  //       </Route>
  //       <Route path="/dashboard" element={<Authenticated><PageLayout /></Authenticated>}>
  //         {dashboardRoutes}
  //       </Route>
  //       <Route path="*" element={<div>NOT FOUND</div>} />
  //     </Routes>
  //   </BrowserRouter>
}

export default Root
