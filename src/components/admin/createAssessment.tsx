import React from 'react';
import { TextInput } from '@mantine/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export function CreateAssessment() {
  const initialValues = {
    name: '',
    description: '',
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('name is required'),
    description: Yup.string().required('Description is required'),
  });
  const handleSubmit = async (values: Record<string, string>) => {
    const { name, description } = values;

    const res = await fetch('/api/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });

    if (res.status === 201) {
      alert('Assessment successfully created');
    } else {
      alert('An error occured');
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors }) => (
          <Form>
            <div className='flex flex-col gap-y-4 text-black'>
              <h1 className=' text-2xl font-semibold'>Create an assessment</h1>
              <TextInput
                label='Name'
                type='text'
                onChange={(event) =>
                  setFieldValue('name', event.currentTarget.value)
                }
                error={errors.name}
              />
              <TextInput
                label='Description'
                onChange={(event) =>
                  setFieldValue('description', event.currentTarget.value)
                }
                error={errors.description}
              />
              <div className='flex flex-row justify-center py-4'>
                <button
                  type='submit'
                  className='bg-black text-white py-1.5 px-8 w-full rounded-md '
                >
                  Create
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
