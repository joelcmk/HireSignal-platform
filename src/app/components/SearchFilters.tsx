'use client';

import React, { useState } from 'react';

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

export function SearchFilters({ onFilterChange }: SearchFiltersProps) {
  const [selectedJobTypes, setSelectedJobTypes] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const jobTypes = ['Full-time', 'Contract', 'Part-time'];
  const locationTypes = ['Remote', 'On-site', 'Hybrid'];

  const handleJobTypeToggle = (type: string) => {
    const newSelected = selectedJobTypes.includes(type)
      ? selectedJobTypes.filter((t) => t !== type)
      : [...selectedJobTypes, type];
    setSelectedJobTypes(newSelected);
    onFilterChange({ jobTypes: newSelected, locations: selectedLocations });
  };

  const handleLocationToggle = (type: string) => {
    const newSelected = selectedLocations.includes(type)
      ? selectedLocations.filter((t) => t !== type)
      : [...selectedLocations, type];
    setSelectedLocations(newSelected);
    onFilterChange({ jobTypes: selectedJobTypes, locations: newSelected });
  };

  const handleClearFilters = () => {
    setSelectedJobTypes([]);
    setSelectedLocations([]);
    onFilterChange({ jobTypes: [], locations: [] });
  };

  const hasActiveFilters = selectedJobTypes.length > 0 || selectedLocations.length > 0;

  return (
    <div className="py-3">
      <div className="flex items-center gap-6">
        {/* Job Type Section */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleJobTypeToggle(type)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  selectedJobTypes.includes(type)
                    ? 'bg-purple-600 text-white shadow-sm hover:bg-purple-700'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Location Section */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-2">
            {locationTypes.map((type) => (
              <button
                key={type}
                onClick={() => handleLocationToggle(type)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  selectedLocations.includes(type)
                    ? 'bg-purple-600 text-white shadow-sm hover:bg-purple-700'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100 dark:bg-gray-700/50 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Clear button - Always visible to prevent layout shift */}
        <div className="flex items-center pl-2">
          <button
            onClick={handleClearFilters}
            disabled={!hasActiveFilters}
            className={`text-xs font-medium transition-colors ${
              hasActiveFilters
                ? 'text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 cursor-pointer'
                : 'text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-50'
            }`}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
