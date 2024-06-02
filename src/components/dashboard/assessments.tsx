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
    <div>
      <h1 className=' text-2xl text-black font-semibold mb-4'>Assessments</h1>
      <div className=' flex flex-row items-center flex-wrap gap-8'>
        {assessments.map((assessment) => (
          <div
            key={assessment.name}
            className='p-4 w-[250px] h-[200px] border-[1px] border-gray-300 rounded-xl  '
          >
            <h1 className=' text-black text-xl font-semibold truncate ...'>
              {assessment.name}
            </h1>
            <p className=' text-gray-600 text-base text-clip mt-2'>
              {assessment.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
