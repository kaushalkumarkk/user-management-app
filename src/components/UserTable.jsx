import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../features/users/userSlice';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import { FaEdit, FaEye, FaSave, FaUserEdit } from 'react-icons/fa';
import { toast } from 'react-toastify';


export default function UserTable() {
  // Access users from Redux store
  const users = useSelector((state) => state.users.users);

  // Setup dispatch and navigation hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State to track the row currently being edited
  const [editableRow, setEditableRow] = useState(null);

  // State to hold the edited user data temporarily
  const [editedData, setEditedData] = useState({});

  // State to manage pagination
  const [perPage, setPerPage] = useState(5);
  const [page, setPage] = useState(1);

  // Calculate total pages based on users length
  const totalPages = Math.ceil(users.length / perPage);

  // Get the current page's users
  const paginatedUsers = users.slice((page - 1) * perPage, page * perPage);

  // Triggered when Edit button is clicked
  const handleEdit = (user) => {
    setEditableRow(user.id);
    setEditedData(user);
  };

  // Triggered when Save button is clicked
  const handleSave = () => {
    dispatch(updateUser(editedData)); // Update user in Redux store
    setEditableRow(); // Exit edit mode
    toast.success('User updated successfully!');  // when user update set the notification
  };

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedData({
      ...editedData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  return (
    <div className="p-6">
      {/* Header and Per Page Selection */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Table</h2>
        <select
          className="border rounded px-3 py-1 text-gray-700"
          value={perPage}
          onChange={(e) => {
            setPerPage(Number(e.target.value));
            setPage(1); // Reset to first page when perPage changes
          }}
        >
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      {/* User Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-sm">
          <thead>
            <tr className="bg-pink-100 text-gray-700 text-left">
              <th className="border p-3">First Name</th>
              <th className="border p-3">Last Name</th>
              <th className="border p-3 text-center">Status</th>
              <th className="border p-3 text-center">DOB</th>
              <th className="border p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedUsers.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                {/* First Name Cell */}
                <td className="border px-3 py-2">
                  {editableRow === user.id ? (
                    <input
                      name="firstName"
                      value={editedData.firstName}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.firstName
                  )}
                </td>

                {/* Last Name Cell */}
                <td className="border px-3 py-2">
                  {editableRow === user.id ? (
                    <input
                      name="lastName"
                      value={editedData.lastName}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.lastName
                  )}
                </td>

                {/* Status Cell */}
                <td className="border px-3 py-2 text-center">
                  {editableRow === user.id ? (
                    <input
                      type="checkbox"
                      name="status"
                      checked={editedData.status}
                      onChange={handleChange}
                    />
                  ) : user.status ? (
                    <span className="text-green-600 font-medium">Active</span>
                  ) : (
                    <span className="text-red-600 font-medium">Inactive</span>
                  )}
                </td>

                {/* Date of Birth Cell */}
                <td className="border px-3 py-2 text-center">
                  {editableRow === user.id ? (
                    <input
                      type="date"
                      name="dob"
                      value={editedData.dob}
                      onChange={handleChange}
                      className="border px-2 py-1 rounded w-full"
                    />
                  ) : (
                    user.dob
                  )}
                </td>

                {/* Action Cell */}
                <td className="border px-3 py-2 text-center">
                  {editableRow === user.id ? (
                    // Save Button
                    <button
                      onClick={handleSave}
                      className="text-green-600 hover:text-green-800 text-xl cursor-pointer"
                      title="Save"
                    >
                      <FaSave />
                    </button>
                  ) : (
                    <div className="flex justify-center gap-4">
                      {/* Edit Button */}
                      <button
                        onClick={() => handleEdit(user)}
                        className="text-blue-600 hover:text-blue-800 text-xl cursor-pointer"
                        title="Edit"
                      >
                        <FaUserEdit />
                      </button>

                      {/* View Button */}
                      <button
                        onClick={() => navigate(`/user/${user.id}`)}
                        className="text-gray-600 hover:text-black text-xl cursor-pointer"
                        title="View"
                      >
                        <FaEye />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Component */}
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={(newPage) => setPage(newPage)}
      />
    </div>
  );
}
