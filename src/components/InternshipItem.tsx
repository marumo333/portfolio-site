'use client';

import { Internship } from '@/data/profile';

interface InternshipItemProps {
  item: Internship;
}

export default function InternshipItem({ item }: InternshipItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-baseline justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{item.company}</h3>
        <span className="text-sm text-gray-500">{item.duration}</span>
      </div>
      <p className="text-gray-700 mt-2">{item.summary}</p>
    </div>
  );
}



