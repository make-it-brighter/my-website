'use client';

import Container from '@/components/common/Container';
import { CommunityList } from '@/components/community-service/CommunityList';
import { communityServices } from '@/config/Community';
import { Separator } from '@/components/ui/separator';

// Helper function to parse date strings like "Jun 2025" to a Date object
function parseDate(dateStr: string): Date {
    if (dateStr === 'Present') {
        return new Date(); // Current date for "Present"
    }
    const months: { [key: string]: number } = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    const parts = dateStr.split(' ');
    const month = months[parts[0]] || 0;
    const year = parseInt(parts[1]) || 2024;
    return new Date(year, month, 1);
}

// Sort community services by start date (most recent first)
const sortedCommunityServices = [...communityServices].sort((a, b) => {
    const dateA = parseDate(a.startDate);
    const dateB = parseDate(b.startDate);
    return dateB.getTime() - dateA.getTime();
});

export default function CommunityPage() {
    return (
        <Container className="py-16">
            <div className="space-y-8">
                {/* Header */}
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                        Community
                    </h1>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        My community involvement and volunteer experiences.
                    </p>
                </div>

                <Separator />

                {/* Community List */}
                <div className="space-y-6">
                    <CommunityList community={sortedCommunityServices} />
                </div>
            </div>
        </Container>
    );
}
