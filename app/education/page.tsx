'use client';

import React from 'react';
import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Singapore Management University',
    degree: 'Bachelor of Laws (LLB)',
    dates: '2024 - Present',
    achievements: [
      'GPA: 3.77/4.00',
      "Dean's List AY 2024/2025",
      'Shook Lin & Bok Book Prize for Top Student in Singapore Legal Systems',
    ],
  },
  {
    institution: 'Anglo-Chinese Junior College',
    degree: 'GCE A Levels',
    dates: '2020 - 2021',
    achievements: [
      'ACJC Hockey - 2019 Plate Tournament Champions',
      "National School Games 'A' Division Representative (2019 & 2020)",
    ],
  },
]

export default function EducationPage() {
  return (
    <Container className="min-h-screen py-12 sm:py-20 pb-20 sm:pb-32">
      {/* Header */}
      <div className="mb-10 sm:mb-16 space-y-6 sm:space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-neutral-900 dark:text-white">
            Education
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400 mx-auto max-w-2xl text-lg">
            My academic journey and achievements.
          </p>
        </div>
        <Separator />
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="p-6 sm:p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {edu.institution}
                  </h3>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    {edu.dates}
                  </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 mt-1">
                  {edu.degree}
                </p>
              </div>
            </div>
            <ul className="space-y-2 ml-14">
              {edu.achievements.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
