import { Button, Container } from '@mui/material';
import { FirstForm } from './forms/first';
import { SecondForm } from './forms/second';
import { ThirdForm } from './forms/third';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormSchema, FormType } from './schemas/schema';


function App() {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
  })

  console.log("errors", form.formState.errors)

  const onSubmit = (data: FormType) => console.log(data)

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FirstForm form={form} />
      <SecondForm form={form} />
      <ThirdForm form={form} />

      <Container maxWidth="md" sx={{pb: 4}}>
        <Button  type="submit" variant="contained" color="primary">Submit</Button>
      </Container>
    </form>
  )
}

export default App
