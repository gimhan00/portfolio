import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

type Education = {
  duration: string;
  institute?: string;
  subject: string;
  stream?: string;
  result?: string;
};

function EducationSection() {
  const Education: Education[] = [
    {
      duration: 'Expected in 2025',
      institute: 'University of Moratuwa',
      subject: 'BSc (Hons.) in Information Technology',
      result: 'CGPA - 3.2',
    },
    {
      duration: '2020',
      institute: 'Vocational Training Authority, Sri Lanka',
      subject: 'Information Communication Technology Technician',
      result: ' NVQ Level 4',
    },
    {
      duration: '2019',
      subject: 'G.C.E. Advance Level',
      institute: "Pushpadana Girls' College Kandy",
      stream: 'Biological Science Stream',
      result: "2 A's , 1 C",
    },
    {
      duration: '2015',
      subject: 'G.C.E. Ordinary Level',
      institute: "Pushpadana Girls' College Kandy",
      result: "9 A's",
    },
  ];
  return (
    <div>
      <div className="text-gray-600 dark:text-fontGray">
        My education reflects a continuous journey of learning and growth,
        building the knowledge and skills essential for my professional
        development.
      </div>
      <div className="mx-4 max-w-3xl py-8">
        <div className="relative border-l-4 border-Secondary py-0 pl-8">
          <div className="mb-0 space-y-8">
            {Education.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="absolute -left-2">
                  {/* <div className="h-5 w-5 rounded-full bg-Secondary"></div> */}
                  <FaDotCircle className="mt-1 h-3 w-3 text-Secondary" />
                </div>

                <p className="mb-2 text-xs font-medium text-Secondary dark:font-light">
                  {item.duration}
                </p>
                <h3 className="text-lg font-medium">{item.subject}</h3>
                <p className="text-md mb-2 font-normal">{item.institute}</p>
                {item.stream && (
                  <p className="text-sm text-fontGray">{item.stream}</p>
                )}
                <p className="text-sm text-gray-500 dark:text-fontGray">
                  {item.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EducationSection;
