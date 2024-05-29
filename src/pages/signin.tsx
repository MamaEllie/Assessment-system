import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextInput, rem } from '@mantine/core';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useState } from 'react';
import Link from 'next/link';

export default function LoginForm() {
  const [passwordType, setPasswordType] = useState('password');
  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('Password is required'),
  });

  const handleSubmit = (values: Record<string, string>) => {
    console.log(values);
  };

  const icon = () => (
    <>
      {passwordType === 'password' && (
        <IconEye
          style={{ width: 25, height: 25 }}
          onClick={() => setPasswordType('text')}
        />
      )}
      {passwordType === 'text' && (
        <IconEyeOff
          style={{ width: 25, height: 25 }}
          onClick={() => setPasswordType('password')}
        />
      )}
    </>
  );
  return (
    <div className=' h-screen w-full md:flex pt-24 md:pt-0 flex-row justify-center items-center bg-graybg'>
      <div className='flex flex-col px-10 py-8 bg-white md:w-[500px] mx-4'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => (
            <Form className=' w-full'>
              <h1 className='text-xl text-center text-black font-semibold'>
                Sign in
              </h1>
              <p className=' text-gray-600 text-center'>
                Welcome back! Please sign in to continue
              </p>
              <div className='flex flex-col gap-y-4 mt-8 text-gray-600'>
                <TextInput
                  label='Email'
                  type='text'
                  onChange={(event) =>
                    setFieldValue('email', event.currentTarget.value)
                  }
                />
                <TextInput
                  label='Password'
                  type={passwordType}
                  onChange={(event) =>
                    setFieldValue('password', event.currentTarget.value)
                  }
                  rightSection={icon()}
                />
                <div className='flex flex-row justify-center py-4'>
                  <button
                    type='submit'
                    className='bg-black text-white py-1.5 px-8 w-full rounded-md '
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
        <div className='flex flex-row items-center gap-x-1 justify-center'>
          <p className=' text-gray-600'>Don&apos;t have an account?</p>
          <Link href='/signup' legacyBehavior passHref>
            <a className=' text-black font-medium hover:underline cursor-pointer'>
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
