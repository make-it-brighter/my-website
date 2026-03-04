// import UmamiAnalytics from '@/components/analytics/UmamiAnalytics';
// import { CommandPalette } from '@/components/common/CommandPalette';
import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import KeyboardManager from '@/components/common/KeyboardManager';
import { ThemeProvider } from '@/components/common/ThemeProviders';
import { generateMetadata as getMetadata } from '@/config/Meta';
// import ReactLenis from 'lenis/react';
import { ViewTransitions } from 'next-view-transitions';
// import StartupAnimation from '@/components/common/StartupAnimation';
// import ScrollToTop from '@/components/common/ScrollToTop';
import { TooltipProvider } from '@/components/ui/tooltip';
import ClientLayout from '@/components/common/ClientLayout';

import 'devicon/devicon.min.css';
import './globals.css';

export const metadata = getMetadata('/');

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body className={`font-hanken-grotesk antialiased`}>
          <ThemeProvider>
            <TooltipProvider>
              <ClientLayout
                navbar={<Navbar />}
                footer={<Footer />}
                oneko={<OnekoCat />}
                keyboardManager={<KeyboardManager />}
              >
                {children}
              </ClientLayout>
            </TooltipProvider>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
