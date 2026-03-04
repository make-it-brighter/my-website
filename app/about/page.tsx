'use client';

import Container from '@/components/common/Container';
import Image from 'next/image';
import React from 'react';
import {
    Linkedin,
    Mail,
} from 'lucide-react';


// ============================================
// DATA
// ============================================

interface Social {
    name: string;
    href: string;
    icon: React.ElementType;
    color: string;
}

const socials: Social[] = [
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rajpreet-singh-ss66/', icon: Linkedin, color: '#0a66c2' },
    { name: 'Email', href: 'mailto:rajpreet.ss.2024@law.smu.edu.sg', icon: Mail, color: '#EA4335' },
];

// ============================================
// COMPONENTS
// ============================================

function SocialIcon({ social }: { social: Social }) {
    const Icon = social.icon;

    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-xl transition-all duration-300 hover:bg-neutral-100 dark:hover:bg-white/5"
            aria-label={social.name}
        >
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-xs font-medium text-white bg-neutral-900 dark:bg-white dark:text-neutral-900 rounded-md opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 whitespace-nowrap pointer-events-none">
                {social.name}
            </span>
            <Icon
                className="size-5 text-neutral-400 transition-all duration-300 group-hover:scale-110"
                style={{ color: undefined }}
                onMouseEnter={(e) => {
                    (e.currentTarget as SVGElement).style.color = social.color;
                }}
                onMouseLeave={(e) => {
                    (e.currentTarget as SVGElement).style.color = '';
                }}
            />
        </a>
    );
}

function AvailabilityBadge() {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open to Opportunities
        </div>
    );
}

// ============================================
// MAIN PAGE
// ============================================

export default function AboutPage() {
    return (
        <Container className="mt-10 sm:mt-16 mb-20 sm:mb-32">
            {/* Hero Section */}
            <section className="flex flex-col items-center text-center pt-4 sm:pt-8 pb-8 sm:pb-12">
                {/* Profile Image with Glow */}
                <div className="relative mb-6 sm:mb-10">
                    <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-br from-blue-400 via-purple-300 to-pink-300 dark:from-blue-500 dark:via-purple-500 dark:to-pink-500 rounded-full scale-110" />
                    <Image
                        src="/profile/rajpreet.jpeg"
                        alt="Rajpreet Singh"
                        width={180}
                        height={180}
                        className="relative size-32 sm:size-44 rounded-full object-cover ring-1 ring-neutral-200/50 dark:ring-white/10 shadow-2xl shadow-neutral-900/10 dark:shadow-black/30"
                        priority
                    />
                </div>

                {/* Name */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 sm:mb-4">
                    Rajpreet Singh
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-medium tracking-wide mb-4 sm:mb-6">
                    Law Student at SMU
                </p>

                {/* Availability Badge */}
                <AvailabilityBadge />

                {/* Social Icons */}
                <div id="socials" className="flex flex-wrap items-center justify-center gap-1 mt-6 sm:mt-8 scroll-mt-24">
                    {socials.map((social) => (
                        <SocialIcon key={social.name} social={social} />
                    ))}
                </div>
            </section>
        </Container>
    );
}
