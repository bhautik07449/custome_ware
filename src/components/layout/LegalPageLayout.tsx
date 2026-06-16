import React from 'react';
import { Card } from '../ui/Card';

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-grid-margin py-xl fade-in">
      <div className="text-center mb-xl ">
        <h1 className="font-headline-md text-headline-lg font-bold text-on-surface">{title}</h1>
        {lastUpdated && (
          <p className="text-label-sm text-on-surface-variant mt-sm">Last updated: {lastUpdated}</p>
        )}
      </div>
      <Card variant="default" className="p-xl md:p-2xl   prose prose-slate max-w-none prose-headings:font-headline-md prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-secondary">
        {children}
      </Card>
    </div>
  );
}
