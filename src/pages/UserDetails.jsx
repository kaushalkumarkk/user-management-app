import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaArrowLeft } from 'react-icons/fa';

export default function UserPage() {
  // Extract user ID from URL parameters
  const { id } = useParams();

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Retrieve the specific user from the Redux store based on the ID
  const user = useSelector((state) =>
    state.users.users.find((u) => u.id === parseInt(id))
  );

  // Show error message if the user is not found
  if (!user) {
    return (
      <div className="p-4 text-center">
        <h2 className="text-xl font-semibold text-red-500">User not found</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded flex items-center gap-2 mx-auto"
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 border rounded-lg shadow-md bg-white">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">User Details</h2>

      {/* Display user's information in read-only input fields */}
      <div className="space-y-5">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">First Name</label>
          <input
            type="text"
            value={user.firstName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
          />
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Last Name</label>
          <input
            type="text"
            value={user.lastName}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
          />
        </div>

        {/* Status */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Status</label>
          <input
            type="text"
            value={user.status ? 'Active' : 'Inactive'}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth</label>
          <input
            type="date"
            value={user.dob}
            readOnly
            className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-800"
          />
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-8 w-full flex items-center justify-center gap-2 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 cursor-pointer"
      >
        <FaArrowLeft />
        Back
      </button>
    </div>
  );
}
