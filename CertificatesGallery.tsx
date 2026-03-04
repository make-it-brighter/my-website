'use client';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export interface Certificate {
  file?: string;
  title?: string;
  issuer?: string;
  date?: string;
}

interface CertificatesGalleryProps {
  certificates: Certificate[];
  className?: string;
}

export default function CertificatesGallery({
  certificates,
  className,
}: CertificatesGalleryProps) {
  const [active, setActive] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (certificates.length === 0) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center space-y-4 text-center">
        <h2 className="text-2xl font-semibold">No certificates found</h2>
        <p className="text-muted-foreground">
          Check back later for certificates and achievements!
        </p>
      </div>
    );
  }


  return (
    <>
      <div
        className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 ${className}`}
      >
        {certificates.map((cert, index) => {
          const isPdf = cert.file?.endsWith('.pdf') ?? false;
          const hasFile = !!cert.file;

          return (
            <Card
              key={cert.file || `cert-${index}`}
              className="group h-full w-full cursor-pointer overflow-hidden border-gray-100 p-0 shadow-none transition-all dark:border-gray-800 hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-700"
              onClick={() => {
                if (!hasFile) return;
                if (isPdf) {
                  window.open(cert.file, '_blank');
                } else {
                  setActive(cert.file!);
                }
              }}
            >
              <CardHeader className="p-0">
                <div className={`group relative aspect-video overflow-hidden ${isPdf ? 'bg-neutral-100 dark:bg-neutral-900' : 'bg-muted/20'}`}>
                  {!hasFile ? (
                    <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                      <span className="text-4xl">📜</span>
                      <span className="text-xs font-medium text-neutral-500">Certificate</span>
                    </div>
                  ) : isPdf ? (
                    isMounted ? (
                      <div className="absolute inset-0 h-full w-full">
                        {/* Overlay to intercept clicks so the card onClick fires */}
                        <div className="absolute inset-0 z-10 bg-transparent" />
                        <iframe
                          src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                          className="h-[150%] w-[150%] origin-top-left scale-[0.67] border-0 pointer-events-none overflow-hidden"
                          title={cert.title}
                        />
                      </div>
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-2">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-300 border-t-neutral-600 dark:border-neutral-700 dark:border-t-neutral-400" />
                        <span className="text-xs font-medium text-neutral-500">Loading Preview...</span>
                      </div>
                    )
                  ) : (
                    <Image
                      src={cert.file}
                      alt={cert.title || 'certificate'}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
              </CardHeader>

              <CardContent className="px-6 py-4">
                <div className="space-y-1">
                  <h3 className="group-hover:text-primary text-lg leading-tight font-bold">
                    {cert.title || 'Certificate'}
                  </h3>
                  {cert.issuer && (
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <span>{cert.issuer}</span>
                    </div>
                  )}
                </div>
              </CardContent>

              {cert.date && (
                <CardFooter className="px-6 pb-4 pt-0">
                  <time className="text-secondary text-xs uppercase tracking-wider" dateTime={cert.date}>
                    {cert.date}
                  </time>
                </CardFooter>
              )}
            </Card>
          );
        })}
      </div>

      {/* Fullscreen viewer for Images */}
      <Dialog
        open={!!active}
        onOpenChange={(open) => {
          if (!open) setActive(null);
        }}
      >
        <DialogContent className="bg-background/95 max-h-[90vh] w-full max-w-[90vw] border-0 p-0 backdrop-blur-sm">
          {active && (
            <>
              <DialogTitle className="sr-only">
                {certificates.find((c) => c.file === active)?.title ||
                  'Certificate'}
              </DialogTitle>
              <div className="flex h-[60vh] items-center justify-center p-4">
                <div className="relative h-full w-full rounded-lg">
                  <Image
                    src={active}
                    alt={
                      certificates.find((c) => c.file === active)?.title ||
                      'certificate'
                    }
                    fill
                    className="rounded-lg object-contain"
                  />
                </div>
              </div>
              {certificates.find((c) => c.file === active) && (
                <div className="border-t px-6 py-4">
                  <div className="space-y-1">
                    <h3 className="text-xl font-bold">
                      {certificates.find((c) => c.file === active)?.title ||
                        'Certificate'}
                    </h3>
                    <div className="flex flex-col gap-1 text-sm text-neutral-500">
                      {certificates.find((c) => c.file === active)?.issuer && (
                        <span>{certificates.find((c) => c.file === active)?.issuer}</span>
                      )}
                      {certificates.find((c) => c.file === active)?.date && (
                        <span>{certificates.find((c) => c.file === active)?.date}</span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
