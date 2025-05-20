import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

type Volunteer = {
  position: string;
  time: string;
  society: string;
};

function VolunteeringSection() {
  const Volunteer: Volunteer[] = [
    {
      position: 'HR Pillar Head',
      time: 'Sep 2024 - Present',
      society:
        'FIT Moments, Faculty of Information Technology, University of Moratuwa',
    },
    {
      position: 'Event Day Coordinator | FIT Sixes 2k24',
      time: 'Nov 2024',
      society:
        'FIT Moments, Faculty of Information Technology, University of Moratuwa',
    },
    {
      position: 'HR Pillar Member',
      time: 'Mar 2023 - Oct 2024',
      society:
        'FIT Moments, Faculty of Information Technology, University of Moratuwa',
    },
    {
      position: 'Company Coordinator | FIT Future Careers',
      time: '2022',
      society:
        'INTECS, Faculty of Information Technology, University of Moratuwa',
    },
    {
      position: 'Subject Coordinator | Nena Aruna',
      time: '2021',
      society: 'Rotract Club, University of Moratuwa',
    },
    {
      position: 'Rep Coordinator | Are you ready?',
      time: '2021',
      society: 'Rotract Club, University of Moratuwa',
    },
  ];
  return (
    <div>
      <div className="text-gray-600 dark:text-fontGray">
        The volunteering experiences I’ve gained over the years have
        strengthened my soft skills, teaching me the value of teamwork,
        effective communication, and adaptability.
      </div>
      <div className="grid grid-rows-4 gap-6 pt-6">
        {Volunteer.map((item, index) => (
          <div key={index} className="flex gap-5 rounded-xl">
            <div>
              <FaDotCircle className="mt-2 text-Secondary" />
            </div>
            <div>
              <div className="flex gap-2">
                <div className="text-lg font-medium">{item.position}</div>
              </div>
              <div className="mb-1 text-xs text-gray-500 dark:text-fontGray">
                {item.time}
              </div>
              <div className="text-sm">{item.society}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VolunteeringSection;
