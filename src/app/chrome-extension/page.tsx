import React from 'react';
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ThemeProvider } from 'next-themes';

const ChromeExtensionPage: React.FC = () => {
  return (
    <ThemeProvider attribute="data-theme">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 dark:text-white leading-tight">
              Don’t miss out on your{' '}
              <span className="bg-gradient-to-r from-purple-700 via-purple-600 to-purple-500 bg-clip-text text-transparent">
                DREAM
              </span>{' '}
              job.
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              HireSignal scans LinkedIn 24/7 to surface the freshest job posts,
              filter out the junk, and spotlight the roles that actually
              matter—so you’re always first in line.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <Link
                target="_blank"
                href="https://chromewebstore.google.com/detail/hire-signal/fdhbeanoahpcdgblkgoablccgbngdipc"
                className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-semibold rounded-lg shadow-lg text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 dark:bg-gradient-to-r dark:from-purple-500 dark:to-purple-600 dark:hover:from-purple-600 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Download Extension
                <svg
                  className="ml-3 -mr-1 w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/joelcmk/HireSignal-extension"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-600 bg-white hover:bg-gray-50 dark:border-gray-500 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors text-sm"
              >
                Source Code
                <svg
                  className="ml-3 -mr-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Why LinkedIn job search is broken? */}
            <div className="mt-16 mb-12">
              {/* Why LinkedIn job search is broken? */}
              <div className="mt-16 mb-12">
                <div className="relative mb-12">
                  <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-purple-600 dark:from-white dark:to-purple-400 mb-8 text-center">
                    Why LinkedIn job search is broken?
                  </h2>
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  {/* LinkedIn Issues */}
                  <div className="bg-red-50 dark:bg-red-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-red-600 dark:text-red-400">
                        The Problem
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-red-600 dark:text-red-400 text-lg">
                          ❌
                        </span>
                        Outdated Job Listings: Many jobs stay up long after
                        they're filled.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-600 dark:text-red-400 text-lg">
                          ❌
                        </span>
                        Spam & Irrelevant Roles: Endless irrelevant or scam job
                        posts.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-red-600 dark:text-red-400 text-lg">
                          ❌
                        </span>
                        Missed Opportunities: Hard to find the truly fresh,
                        valuable roles.
                      </li>
                    </ul>
                  </div>

                  {/* HireSignal Solutions */}
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-green-600 dark:text-green-400">
                        HireSignal Solution
                      </h3>
                    </div>
                    <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                      <li className="flex gap-3">
                        <span className="text-green-600 dark:text-green-400 text-lg">
                          ✓
                        </span>
                        Real-Time Job Scanning: We scan 24/7, so you see jobs
                        first.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 dark:text-green-400 text-lg">
                          ✓
                        </span>
                        Spam & Scam Filter: Our AI filters out the junk, every
                        time.
                      </li>
                      <li className="flex gap-3">
                        <span className="text-green-600 dark:text-green-400 text-lg">
                          ✓
                        </span>
                        Spotlight on Relevant Roles: Get notified about roles
                        that truly match your profile.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default ChromeExtensionPage;
