'use client';

import React from 'react';
import Container from '@/components/common/Container';
import SectionHeading from '@/components/common/SectionHeading';
import {
    Linkedin,
    Github,
    Twitter as TwitterIcon,
    Send,
    Code,
    Newspaper,
    BookOpen,
    User,
    ArrowUpRight
} from 'lucide-react';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Link } from 'next-view-transitions';

interface SocialProfile {
    name: string;
    href: string;
    icon: any;
    color: string;
    size: 'large' | 'medium' | 'small';
}

const socials: SocialProfile[] = [
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/saaiaravindhraja',
        icon: Linkedin,
        color: '#0a66c2',
        size: 'large',
    },
    {
        name: 'GitHub',
        href: 'https://github.com/SaaiAravindhRaja',
        icon: Github,
        color: '#24292e',
        size: 'large',
    },
    {
        name: 'Telegram',
        href: 'https://t.me/@Saai2604',
        icon: Send,
        color: '#26A5E4',
        size: 'large',
    },
    {
        name: 'X (Twitter)',
        href: 'https://X.com/@ChaiAndTweet',
        icon: TwitterIcon,
        color: '#000000',
        size: 'medium',
    },
    {
        name: 'Devpost',
        href: 'https://devpost.com/SaaiAravindhRaja',
        icon: Code,
        color: '#003E54',
        size: 'medium',
    },
    {
        name: 'Substack',
        href: 'https://substack.com/@saaiaravindhraja',
        icon: Newspaper,
        color: '#FF6719',
        size: 'small',
    },
    {
        name: 'Medium',
        href: 'https://medium.com/@saaiaravindhraja',
        icon: BookOpen,
        color: '#000000',
        size: 'small',
    },
    {
        name: 'About.me',
        href: 'https://about.me/saaiaravindhraja',
        icon: User,
        color: '#000000',
        size: 'small',
    },
];

export default function SocialsPage() {
    return (
        <Container className="min-h-screen py-10">
            <div className="mb-8">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Socials</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <SectionHeading
                subHeading="Main Hubs"
                heading="Social Ecosystem"
            />

            {/* Bento Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {socials.map((social) => (
                    <SocialCard key={social.name} social={social} />
                ))}
            </div>
        </Container>
    );
}

function SocialCard({ social }: { social: SocialProfile }) {
    const Icon = social.icon;

    const spanClass = social.size === 'large'
        ? 'lg:col-span-1 row-span-2'
        : social.size === 'medium'
            ? 'lg:col-span-1'
            : '';

    return (
        <a
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`
        group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-neutral-200 bg-neutral-50/50 p-8 transition-all duration-500
        hover:-translate-y-2 hover:border-transparent hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]
        dark:border-neutral-800 dark:bg-neutral-900/50 dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]
        ${spanClass}
      `}
        >
            {/* Brand Color reveal */}
            <div
                className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-5"
                style={{ backgroundColor: social.color }}
            />

            <div className="relative z-10 flex flex-col gap-4">
                <div className={`
          flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-neutral-200 transition-all duration-500
          group-hover:scale-110 group-hover:ring-0
          dark:bg-white dark:ring-white/20
        `}
                    style={{ color: social.color }}
                >
                    <Icon className="h-6 w-6" />
                </div>

                <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
                        {social.name}
                    </h3>
                </div>
            </div>

            <div className="relative z-10 mt-8 flex items-center gap-2 text-sm font-semibold text-neutral-400 transition-colors group-hover:text-neutral-900 dark:group-hover:text-white">
                Visit Profile
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
        </a>
    );
}
