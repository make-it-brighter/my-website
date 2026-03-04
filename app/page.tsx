import Container from '@/components/common/Container';
import CTA from '@/components/landing/CTA';
import Experience from '@/components/landing/Experience';
import FeaturedEducation from '@/components/landing/FeaturedEducation';
import Hackathons from '@/components/landing/Hackathons';
import Hero from '@/components/landing/Hero';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

export default function page() {
  return (
    <Container className="min-h-screen pt-6 sm:pt-8 pb-12 sm:pb-16">
      <Hero />
      <div id="activities">
        <Experience limit={4} />
      </div>
      <div id="education">
        <FeaturedEducation />
      </div>

      <div id="competitions">
        <Hackathons limit={4} showChess={false} />
        <div className="mt-6 sm:mt-8 flex justify-center">
          <Link href="/competitions">
            <Button variant="outline" className="text-sm sm:text-base">Show all competitions</Button>
          </Link>
        </div>
      </div>

      <CTA />
    </Container>
  );
}
