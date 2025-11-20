'use client';

import React, { useState } from 'react';
import { SearchIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';
import Autocomplete from 'react-google-autocomplete';
import Link from 'next/link';

interface SearchBarProps {
  initialQuery?: string;
  initialLocation?: string;
  onSearch: (query: string, location: string) => void;
}

export function SearchBar({
  initialQuery = '',
  initialLocation = '',
  onSearch,
}: SearchBarProps) {
  const [query, setQuery] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query, location);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0 mr-4">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Hire<span className="text-purple-600">Signal</span>
            </span>
          </Link>
          <form
            onSubmit={handleSubmit}
            className="flex flex-1 flex-col sm:flex-row gap-3"
          >
            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BriefcaseIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Job title, skills, or company"
                className="block w-full pl-10 pr-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              />
            </div>

            <div className="flex-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MapPinIcon className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <Autocomplete
                apiKey={process.env.NEXT_PUBLIC_MAPS_KEY}
                defaultValue={location}
                placeholder="City, state, or remote"
                className="block w-full pl-10 pr-3 py-2 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                onPlaceSelected={(place) =>
                  setLocation(place.formatted_address || '')
                }
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors flex items-center justify-center"
            >
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </button>
          </form>

          {/* Sign in button */}
          <Link
            href="/login"
            className="ml-4 px-4 py-2 text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 rounded-md transition-colors dark:bg-purple-500 dark:hover:bg-purple-600"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
