import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import arrow icons

export default function Pagination({ page, totalPages, onPageChange }) {
  return (
    <div className="mt-6 flex justify-center items-center gap-4">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        className={`px-4 py-2 flex items-center gap-2 rounded-md text-sm font-medium border ${
          page === 1
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white hover:bg-blue-100 text-blue-600 border-blue-400'
        }`}
      >
        <FaArrowLeft className="text-sm" />
        Prev
      </button>

      {/* Page Info */}
      <span className="text-base font-semibold text-gray-900">
        <span className="px-3 py-1 rounded-md bg-black text-white">
          {page}
        </span>{' '}
        <span className="text-gray-600">of {totalPages}</span>
      </span>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        className={`px-4 py-2 flex items-center gap-2 rounded-md text-sm font-medium border ${
          page === totalPages
            ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
            : 'bg-white hover:bg-blue-100 text-blue-600 border-blue-400'
        }`}
      >
        Next
        <FaArrowRight className="text-sm" />
      </button>
    </div>
  );
}
