'use client';

import React from 'react';
import Container from '@/components/common/Container';
import Hackathons from '@/components/landing/Hackathons';
import { Separator } from '@/components/ui/separator';

export default function CompetitionsPage() {
    return (
        <Container className="py-16">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Hackathons & Competitions
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        My achievements and experiences in hackathons and coding competitions.
                    </p>
                </div>

                <Separator />

                <Hackathons showTitle={false} />
            </div>
        </Container>
    );
}
