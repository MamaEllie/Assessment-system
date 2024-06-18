import React from 'react';
import { TextInput } from '@mantine/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export function CreateAssessment() {
  const questions = [
    {
      questionText: 'How would you rate the overall connectivity on campus?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
      correctAnswer: 'Excellent',
    },
    {
      questionText:
        'Are you satisfied with the sustainability initiatives implemented on campus?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      questionText:
        'How efficient do you find the campus facilities and services?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
      correctAnswer: 'Excellent',
    },
    {
      questionText:
        'Do you feel that the campus promotes a culture of innovation and technology adoption?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      questionText:
        'Have you noticed any recent improvements or upgrades in campus infrastructure or services?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      questionText:
        'How would you rate the accessibility of digital resources and platforms provided by the university?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
      correctAnswer: 'Excellent',
    },
    {
      questionText:
        'Do you feel that the campus effectively utilizes technology to enhance learning and collaboration?',
      options: ['Yes', 'No'],
      correctAnswer: 'Yes',
    },
    {
      questionText:
        'How satisfied are you with the overall campus environment in terms of cleanliness and maintenance?',
      options: ['Poor', 'Fair', 'Good', 'Excellent'],
      correctAnswer: 'Excellent',
    },
    {
      questionText:
        'How efficiently do the smart campus systems manage resource allocation (e.g., classrooms, labs, funding) to support academic activities?',
      options: [
        'Very efficiently',
        'Efficiently',
        'Neutral',
        'Inefficiently',
        'Very inefficiently',
      ],
      correctAnswer: 'Very inefficiently',
    },
    {
      questionText:
        'How effective are the smart campus communication systems (e.g., dashboards, alerts) in facilitating communication between the campus and external stakeholders, such as government bodies and industry partners?',
      options: [
        'Very efficiently',
        'Efficiently',
        'Neutral',
        'Inefficiently',
        'Very inefficiently',
      ],
      correctAnswer: 'Very inefficiently',
    },
  ];
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
      body: JSON.stringify({ name, description, questions }),
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
