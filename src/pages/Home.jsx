import React from 'react';
import UserTable from '../components/UserTable'; // Import the reusable UserTable component

// Home component serves as the main landing page for displaying the user table
export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <UserTable />
    </div>
  );
}
