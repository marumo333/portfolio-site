'use client';

import { Skill } from '@/data/profile';

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
      <p className="text-sm text-gray-600 mt-1">用途: {skill.usage.join(' / ')}</p>
      <p className="text-gray-700 mt-2">{skill.summary}</p>
    </div>
  );
}



