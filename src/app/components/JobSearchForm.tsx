'use client';

import React, { useState } from 'react';
import { Logo } from './logo';
import { SearchIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';
import Autocomplete from 'react-google-autocomplete';
import { useRouter } from 'next/navigation';

export function JobSearchForm() {
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (query) params.append('q', query);
    if (location) params.append('location', location);
    router.push(`/results?${params.toString()}`);
  };

  return (
    <div className="w-full max-w-2xl px-4">
      <Logo />
      <div className="rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            {/* Job Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skills, or company"
                className="block w-full pl-10 pr-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                autoFocus
              />
            </div>

            {/* Location Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}
                placeholder="City, state, or remote"
                className="block w-full pl-10 pr-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                onPlaceSelected={(place) => setLocation(place.formatted_address)}
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              <SearchIcon className="w-5 h-5 mr-2" />
              Search Jobs
            </button>
          </div>
        </form>

        {/* Quick Filters */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap gap-2">
            {['Remote', 'Tech', 'Healthcare', 'Marketing'].map((filter) => (
              <button
                key={filter}
                className="px-3 py-1 text-sm rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}