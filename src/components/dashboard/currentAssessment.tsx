import React, { useState, useEffect } from "react";
import { Divider, Select } from "@mantine/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

type Questions = {
  id: number;
  assessmentId: number;
  questionText: string;
  options: string[];
  correctAnswer: string;
  createdAt: string;
  updatedAt: string;
};

type Assessment = {
  id?: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  questions: Questions[];
};

export function CurrentAssessment() {
  const [assessments, setAssessment] = useState<Assessment[]>([]);
  const [options, setOptions] = useState<any>([]);
  const [selectedAssessment, setSelectedAssessment] = useState<Assessment>();
  const [submitted, setSubmitted] = useState(false);
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    async function fetchAssessments() {
      const res = await fetch("/api/assessment");
      const response: Assessment[] = await res.json();
      setAssessment(response);
      setOptions(
        response.map((val) => {
          return {
            label: val.name,
            value: String(val.id),
          };
        })
      );
    }

    fetchAssessments();
  }, []);
  const initialValues = {
    university: "",
    assessment: "",
  };
  const validationSchema = Yup.object({
    university: Yup.string().required("university is required"),
    assessment: Yup.string().required("assessment is required"),
  });

  const answersinitialValues = {
    0: "",
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
  };
  const answersvalidationSchema = Yup.object({
    0: Yup.string().required("Answer is required"),
    1: Yup.string().required("Answer is required"),
    2: Yup.string().required("Answer is required"),
    3: Yup.string().required("Answer is required"),
    4: Yup.string().required("Answer is required"),
    5: Yup.string().required("Answer is required"),
    6: Yup.string().required("Answer is required"),
    7: Yup.string().required("Answer is required"),
    8: Yup.string().required("Answer is required"),
    9: Yup.string().required("Answer is required"),
  });

  const universities = [
    "University of Dar es Salaam (UDSM)",
    "Sokoine University of Agriculture (SUA)",
    "Ardhi University (ARU)",
    "University of Dodoma (UDOM)",
    "Tumaini University Makumira",
    "Mzumbe University",
    "Nelson Mandela African Institute of Science and Technology (NM-AIST)",
    "Muhimbili University of Health and Allied Sciences (MUHAS)",
    "Ruaha Catholic University (RUCU)",
    "St. Augustine University of Tanzania (SAUT)",
    "Zanzibar University (ZU)",
    "University of Iringa",
    "Teofilo Kisanji University (TEKU)",
    "Tengeru Institute of Community Development (TICD)",
    "Hubert Kairuki Memorial University (HKMU)",
    "Jordan University College",
    "College of Business Education (CBE)",
    "Kampala International University in Tanzania (KIUT)",
    "Mwalimu Nyerere Memorial Academy (MNMA)",
    "Moshi Co-operative University (MoCU)",
  ];

  const handleSubmit = async (values: Record<string, string>) => {
    const assessment = assessments.find(
      (assessment) => assessment.id === Number(values.assessment)
    );
    setSelectedAssessment(assessment);
  };

  const handleAssessmentSubmit = async (values: Record<string, string>) => {
    const correctAnswers = selectedAssessment?.questions.map(
      (question) => question.correctAnswer
    );
    const answers = Object.values(values);
    answers.forEach((answer, index) => {
      //@ts-ignore
      if (answer === correctAnswers[index]) {
        setPercentage((prev) => prev + 10);
      }
    });
    setSubmitted(true);
  }; 

  return (
    <div>
      {selectedAssessment && (
        <div className=" flex flex-row items-center gap-x-10">
          <div className="w-2/3">
            <Formik
              initialValues={answersinitialValues}
              validationSchema={answersvalidationSchema}
              onSubmit={handleAssessmentSubmit}
            >
              {({ setFieldValue, errors, values }) => (
                <Form>
                  <h1 className=" text-lg font-semibold">
                    {selectedAssessment.name}
                  </h1>
                  <h1 className=" text-base text-gray-700">
                    {selectedAssessment.description}
                  </h1>
                  <div className=" mt-5 border-[1px] border-gray-500 rounded-lg px-8 py-4 h-[400px] 2xl:h-[500px] overflow-y-scroll overscroll-contain">
                    <ul className="list-decimal pl-5 text-black flex flex-col gap-y-4">
                      {selectedAssessment.questions.map((question, index) => (
                        <li key={question.questionText}>
                          <p>{question.questionText}</p>
                          <div className="flex flex-row items-center gap-2 flex-wrap mt-3">
                            {question.options.map((option) => (
                              <div
                                key={option}
                                className={`border-[1px] border-gray-300 rounded-md px-4 py-1 cursor-pointer ${
                                  // @ts-ignore
                                  values[`${index}`] === option &&
                                  "bg-graytext text-black font-medium"
                                }`}
                                onClick={() =>
                                  setFieldValue(String(index), option)
                                }
                              >
                                {option}
                              </div>
                            ))}
                          </div>
                          <p className=" text-red-500 mt-2 text-sm font-semibold">
                            {
                              // @ts-ignore
                              errors[`${index}`]
                            }
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {!submitted && (
                    <button
                      className="px-8 py-2 mt-5 bg-black text-white rounded-md"
                      type="submit"
                    >
                      Submit
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
          {submitted && (
            <div className="w-1/3">
              <div className="flex flex-col gap-y-4 items-center">
                <h1 className=" text-black text-3xl">The score is:</h1>
                <h1 className=" text-red-600 text-5xl">{percentage}%</h1>
              </div>
            </div>
          )}
        </div>
      )}
      {!selectedAssessment && (
        <div className="w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, values }) => (
              <Form>
                <div className="flex flex-col gap-y-4 text-black">
                  <h1 className=" text-xl font-semibold">
                    Fill the below form to take the assessment
                  </h1>
                  <Select
                    label="University"
                    placeholder="Pick one"
                    data={universities}
                    searchable
                    nothingFoundMessage="No options"
                    value={values.university}
                    onChange={(value) => setFieldValue("university", value)}
                    error={errors.university}
                  />
                  <Select
                    label="Assessment"
                    placeholder="Pick one"
                    data={options}
                    searchable
                    nothingFoundMessage="No options"
                    value={values.assessment}
                    onChange={(value) => setFieldValue("assessment", value)}
                    error={errors.assessment}
                  />
                  <div className="flex flex-row justify-center py-4">
                    <button
                      type="submit"
                      className="bg-black text-white py-1.5 px-8 w-full rounded-md "
                    >
                      Take assessment
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}
    </div>
  );
}
