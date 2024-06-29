import React from 'react';
import { TextInput } from '@mantine/core';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

export function CreateAssessment() {
  const questions = [
    {
      questionText: "How would you rate the overall connectivity on campus?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      correctAnswer: "Excellent",
      recomendation: "The University should improve the overall conectivity",
    },
    {
      questionText:
        "Does the campus use smart technologies effectively to promote environmental awareness among students and staff",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      recomendation:
        "The campus should influence the use of smart technology to promote environmetal awareness",
    },
    {
      questionText:
        "How efficient do you find the campus facilities and services?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      correctAnswer: "Excellent",
      recomendation:
        "The Univrsity should Integrate smart technologies such as IoT devices, automated systems, and data analytics to monitor and improve the efficiency of campus facilities and services",
    },
    {
      questionText:
        "Do you feel that the campus promotes a culture of innovation and technology adoption?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      recomendation:
        "Implement programs and initiatives that encourage innovation and the adoption of new technologies, such as hackathons, tech workshops, and partnerships with tech companies to create a more innovative campus environment",
    },
    {
      questionText:
        "Have you noticed any recent improvements or upgrades in campus infrastructure or services?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      recomendation:
        "Conduct regular assessments of campus infrastructure and services to identify areas needing improvement. Prioritize upgrades and communicate progress to the campus community to increase awareness and engagement",
    },
    {
      questionText:
        "How would you rate the accessibility of digital resources and platforms provided by the university?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      correctAnswer: "Excellent",
      recomendation:
        "Continuously enhance the accessibility of digital resources and platforms by addressing identified barriers, ensuring compliance with accessibility standards, and providing ongoing training and support to maintain a user-friendly experience for all stakeholders.",
    },
    {
      questionText:
        "Do you feel that the campus effectively utilizes technology to enhance learning and collaboration?",
      options: ["Yes", "No"],
      correctAnswer: "Yes",
      recomendation:
        "Implement comprehensive strategies to integrate technology into learning and collaboration processes, including the adoption of interactive platforms, virtual classrooms, and collaborative tools to improve engagement and efficiency.",
    },
    {
      questionText:
        "How satisfied are you with the overall campus environment in terms of cleanliness and maintenance?",
      options: ["Poor", "Fair", "Good", "Excellent"],
      correctAnswer: "Excellent",
      recomendation:
        "Implement a comprehensive maintenance plan that includes regular inspections, prompt repairs, and increased cleaning schedules to improve overall cleanliness and maintenance standards across the campus.",
    },
    {
      questionText:
        "How efficiently do the campus systems manage resource allocation (e.g., classrooms, labs, funding) to support academic activities?",
      options: [
        "Very efficiently",
        "Efficiently",
        "Neutral",
        "Inefficiently",
        "Very inefficiently",
      ],
      correctAnswer: "Very efficiently",
      recomendation:
        "Implement streamlined resource management strategies, integrating automated allocation systems and regular feedback mechanisms, to optimize resource usage and better support academic activities across campus.",
    },
    {
      questionText:
        "How effective are the campus communication systems (e.g., dashboards, alerts) in facilitating communication between the campus and external stakeholders, such as government bodies and industry partners?",
      options: [
        "Very efficiently",
        "Efficiently",
        "Neutral",
        "Inefficiently",
        "Very inefficiently",
      ],
      correctAnswer: "Very efficiently",
      recomendation:
        "Enhance campus communication systems by implementing advanced dashboards, efficient alerts, and streamlined processes to foster effective communication with external stakeholders, including government bodies and industry partners.",
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
