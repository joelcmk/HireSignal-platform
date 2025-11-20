'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { ThemeProvider } from 'next-themes';
import { SearchIcon, MapPinIcon, BriefcaseIcon } from 'lucide-react';
import Autocomplete from 'react-google-autocomplete';
import { SearchBar } from '../components/SearchBar';
import { SearchFilters } from '../components/SearchFilters';

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get('q') || '';
  const location = searchParams.get('location') || '';
  const [searchQuery, setSearchQuery] = useState(query);
  const [searchLocation, setSearchLocation] = useState(location);

  // State for filters
  const [selectedFilters, setSelectedFilters] = useState({
    jobTypes: [] as string[],
    locations: [] as string[],
  });

  // Mock job results
  const mockJobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'TechCorp',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description:
        'We are looking for an experienced frontend developer to join our growing team.',
    },
    {
      id: 2,
      title: 'Product Manager',
      company: 'Innovation Labs',
      location: 'New York, NY',
      type: 'Full-time',
      description:
        'Lead product strategy and development for our SaaS platform.',
    },
    {
      id: 3,
      title: 'UX Designer',
      company: 'Design Studio',
      location: 'Remote',
      type: 'Contract',
      description:
        'Create beautiful and intuitive user experiences for web and mobile applications.',
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      company: 'Cloud Systems Inc',
      location: 'Austin, TX',
      type: 'Full-time',
      description:
        'Build and maintain our cloud infrastructure and CI/CD pipelines.',
    },
    {
      id: 5,
      title: 'Data Scientist',
      company: 'Analytics Pro',
      location: 'Boston, MA',
      type: 'Full-time',
      description: 'Analyze large datasets and build machine learning models.',
    },
  ];

  // Filter jobs based on selected filters
  const filteredJobs = mockJobs.filter((job) => {
    // Filter by job type
    if (
      selectedFilters.jobTypes.length > 0 &&
      !selectedFilters.jobTypes.includes(job.type)
    ) {
      return false;
    }

    // Filter by location (Remote vs On-site)
    if (selectedFilters.locations.length > 0) {
      const isRemote = job.location.toLowerCase() === 'remote';
      const matchesRemote =
        selectedFilters.locations.includes('Remote') && isRemote;
      const matchesOnsite =
        selectedFilters.locations.includes('On-site') && !isRemote;
      const matchesHybrid = selectedFilters.locations.includes('Hybrid'); // For now, hybrid filters can match all

      if (!matchesRemote && !matchesOnsite && !matchesHybrid) {
        return false;
      }
    }

    return true;
  });

  const handleFilterChange = (filters: any) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ThemeProvider attribute="data-theme">
        <main className="flex-1 w-full">
          <SearchBar
            initialQuery={query}
            initialLocation={location}
            onSearch={searchQuery}
          />

          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Search Header with Filters - Centered Layout */}
            <div className="fixed top-18 left-0 right-0 z-40 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm ">
              <div className="max-w-6xl mx-auto px-4 py-2">
                <div className="flex items-center gap-6">
                  {/* Title and Search Info - Centered */}
                  <div className="flex-none w-64">
                    <div className="flex flex-col justify-center">
                      <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                        {filteredJobs.length} job
                        {filteredJobs.length !== 1 ? 's' : ''}
                        {query && (
                          <>
                            <span className="text-gray-500 dark:text-gray-400">
                              {' '}
                              for{' '}
                            </span>
                            <span className="text-purple-600 dark:text-purple-400">
                              "{query}"
                            </span>
                          </>
                        )}
                      </h1>
                      {location && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                          in{' '}
                          <span className="text-purple-600 dark:text-purple-400">
                            {location}
                          </span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Filters Section */}
                  <div className="flex-1 min-w-0">
                    <SearchFilters onFilterChange={handleFilterChange} />
                  </div>
                </div>
              </div>
            </div>

            {/* Spacer to push content below fixed header */}
            <div className="h-32"></div>

            {/* Job Listings */}
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400">
                        {job.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">
                        {job.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                      {job.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {job.location}
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {job.description}
                  </p>

                  <div className="mt-4 flex gap-3">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      Save Job
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex gap-2">
                <button
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-2 bg-purple-600 text-white rounded-md text-sm">
                  1
                </button>
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  2
                </button>
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  3
                </button>
                <button className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
