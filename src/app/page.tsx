import React from 'react';
import { JobSearchForm } from './components/JobSearchForm';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from 'next-themes';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <ThemeProvider attribute="data-theme">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center">
          <JobSearchForm />
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
