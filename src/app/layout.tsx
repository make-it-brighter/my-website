import Footer from '@/components/common/Footer';
import Navbar from '@/components/common/Navbar';
import OnekoCat from '@/components/common/OnekoCat';
import KeyboardManager from '@/components/common/KeyboardManager';
import { ViewTransitions } from 'next-view-transitions';
import { TooltipProvider } from '@/components/ui/tooltip';
import ClientLayout from '@/components/common/ClientLayout';

import 'devicon/devicon.min.css';
import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body>
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
        </body>
      </html>
    </ViewTransitions>
  );
}
