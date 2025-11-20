'use client';

import React from 'react';
import ThemeSwitch from './ThemeSwitch';

export const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="w-full py-6 px-4 mt-12 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} HireSignal. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
          </div>
          <div className="flex items-center">
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </footer>
  );
}
