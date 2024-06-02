import React, { useEffect, useState } from 'react';

type Assessment = {
  name: string;
  description: string;
};

export function Assessments() {
  const [assessments, setAssessment] = useState<Assessment[]>([]);
  useEffect(() => {
    async function fetchAssessments() {
      const res = await fetch('/api/assessment');
      const data = await res.json();
      setAssessment(data);
    }

    fetchAssessments();
  }, []);
  return (
    <div className=' flex flex-row items-center flex-wrap gap-8'>
      {assessments.map((assessment) => (
        <div key={assessment.name} className='flex flex-col items-center justify-center w-[250px] h-[200px] border-[1px] border-gray-300 rounded-xl  '>
          <h1 className=' text-black text-xl font-semibold truncate ...'>{assessment.name}</h1>
          <p className=' text-gray-500 text-base truncate ...'>{assessment.description}</p>
        </div>
      ))}
    </div>
  );
}
