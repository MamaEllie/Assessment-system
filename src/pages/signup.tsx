import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SignUpForm() {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  });

  const handleSubmit = (values: Record<string, string>) => {
    // Add your form submission logic here
    console.log(values);
  };

  return (
    <div className=' h-screen flex flex-col justify-center items-center'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className='flex flex-col gap-y-8 w-1/4'>
          <h1 className='text-3xl text-center'>Sign up</h1>
          <Field
            type='text'
            name='firstName'
            placeholder='First Name'
            as={TextField}
          />
          <Field
            type='text'
            name='lastName'
            placeholder='Last Name'
            as={TextField}
          />
          <Field type='email' name='email' placeholder='Email' as={TextField} />
          <Field
            type='password'
            name='password'
            placeholder='Password'
            as={TextField}
          />
          <Button type='submit' variant='contained'>
            Sign Up
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
