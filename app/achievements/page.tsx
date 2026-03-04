import Container from '@/components/common/Container';
import { Separator } from '@/components/ui/separator';
import { awards, certificateGroups } from '@/config/Achievements';
import { generateMetadata as getMetadata } from '@/config/Meta';
import { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import { CheckCircle2, Award } from 'lucide-react';

export const metadata: Metadata = {
    ...getMetadata('/achievements'),
};

export default function AchievementsPage() {
    return (
        <Container className="py-16">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Achievements
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        My awards, recognitions, and professional certifications.
                    </p>
                </div>

                <Separator />

                {/* Awards Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Awards & Recognitions</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                        {awards.map((award, index) => (
                            <div
                                key={index}
                                className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group overflow-hidden h-full flex flex-col"
                            >
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-blue-500/10 dark:bg-blue-400/10 blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
                                <div className="relative flex flex-col items-center text-center gap-4">
                                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border-2 border-neutral-100 dark:border-neutral-800 bg-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                                        <Image
                                            src={award.image}
                                            alt={award.issuer}
                                            fill
                                            className="object-contain p-1.5 sm:p-2"
                                            sizes="80px"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2 sm:gap-3">
                                        <span className="inline-flex items-center justify-center gap-1 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-blue-100 dark:border-blue-800 mx-auto">
                                            <Award className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                                            {award.award}
                                        </span>
                                        <h3 className="font-bold text-base sm:text-lg text-neutral-800 dark:text-neutral-50 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                            {award.title}
                                        </h3>
                                        <p className="text-sm text-neutral-500 font-medium">
                                            {award.issuer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Section */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-semibold">Certifications</h2>
                    <div className="grid grid-cols-1 gap-8 sm:gap-12">
                        {certificateGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="relative group">
                                <div className="flex items-center gap-4 sm:gap-6 mb-6 sm:mb-8">
                                    <div className="relative h-16 w-16 sm:h-24 sm:w-24 shrink-0 overflow-hidden rounded-xl sm:rounded-2xl bg-white border-2 border-neutral-100 dark:border-neutral-800 p-2 sm:p-4 shadow-lg">
                                        <Image
                                            src={group.logo}
                                            alt={group.name}
                                            fill
                                            className="object-contain p-1 sm:p-2"
                                            sizes="96px"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-3xl font-bold text-neutral-900 dark:text-white mb-1 sm:mb-2">
                                            {group.name}
                                        </h3>
                                        <div className="flex items-center gap-2 text-neutral-500">
                                            <span className="flex h-2 w-2 rounded-full bg-green-500" />
                                            <span className="font-medium text-sm sm:text-lg">{group.certificates.length} Credentials</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
                                    {group.certificates.map((cert, certIndex) => (
                                        <div
                                            key={certIndex}
                                            className="relative p-4 sm:p-5 rounded-lg sm:rounded-xl bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-blue-500/30 dark:hover:border-blue-500/30 transition-all duration-300 hover:shadow-md hover:-translate-y-1 group/card"
                                        >
                                            <div className="flex flex-col justify-between h-full gap-3 sm:gap-4">
                                                <div className="flex items-start justify-between gap-2 sm:gap-3">
                                                    <h4 className="font-semibold text-sm sm:text-base text-neutral-800 dark:text-neutral-200 leading-snug group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                                                        {cert.title}
                                                    </h4>
                                                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                                                </div>
                                                <div className="flex items-center justify-between text-[10px] sm:text-xs text-neutral-400 font-mono border-t border-neutral-100 dark:border-neutral-800 pt-2 sm:pt-3 mt-auto">
                                                    <span>{cert.issuer}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
}
