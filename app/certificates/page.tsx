import Container from '@/components/common/Container';
import Certificates from '@/components/landing/Certificates';
import { Metadata } from 'next';
import React from 'react';

// You might need to add '/certificates' to your Meta config if not dynamic
// passing fallback title/desc
export const metadata: Metadata = {
    title: 'Certificates | Saai Aravindh Raja',
    description: 'Certifications and courses completed.',
};

export default function CertificatesPage() {
    return (
        <Container className="py-16">
            <Certificates />
        </Container>
    );
}
