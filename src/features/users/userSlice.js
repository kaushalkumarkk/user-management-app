import { createSlice } from '@reduxjs/toolkit';
// This is the default state of the Redux store containing a list of sample users.
// Each user has an id, first name, last name, status (active/inactive), and date of birth.
const initialState = {
 users: [
  { id: 1, firstName: 'Aarav', lastName: 'Sharma', status: true, dob: '1990-01-15' },
  { id: 2, firstName: 'Ananya', lastName: 'Verma', status: false, dob: '1992-06-30' },
  { id: 3, firstName: 'Rohan', lastName: 'Patel', status: true, dob: '1991-03-10' },
  { id: 4, firstName: 'Priya', lastName: 'Reddy', status: true, dob: '1988-08-25' },
  { id: 5, firstName: 'Kunal', lastName: 'Singh', status: false, dob: '1993-05-20' },
  { id: 6, firstName: 'Sneha', lastName: 'Mehta', status: true, dob: '1987-07-11' },
  { id: 7, firstName: 'Arjun', lastName: 'Joshi', status: false, dob: '1996-11-05' },
  { id: 8, firstName: 'Diya', lastName: 'Kapoor', status: true, dob: '1990-12-18' },
  { id: 9, firstName: 'Raj', lastName: 'Kumar', status: false, dob: '1989-04-22' },
  { id: 10, firstName: 'Isha', lastName: 'Nair', status: true, dob: '1994-10-09' },
  { id: 11, firstName: 'Yash', lastName: 'Gupta', status: false, dob: '1991-06-12' },
  { id: 12, firstName: 'Neha', lastName: 'Choudhary', status: true, dob: '1995-08-16' },
  { id: 13, firstName: 'Vikram', lastName: 'Malhotra', status: false, dob: '1993-02-03' },
  { id: 14, firstName: 'Meera', lastName: 'Desai', status: true, dob: '1990-03-21' },
  { id: 15, firstName: 'Aman', lastName: 'Yadav', status: true, dob: '1987-09-29' },
  { id: 16, firstName: 'Tanvi', lastName: 'Bansal', status: false, dob: '1996-01-07' },
  { id: 17, firstName: 'Rajat', lastName: 'Bhatt', status: true, dob: '1992-04-15' },
  { id: 18, firstName: 'Pooja', lastName: 'Iyer', status: false, dob: '1988-07-28' },
  { id: 19, firstName: 'Harsh', lastName: 'Saxena', status: true, dob: '1994-12-11' },
  { id: 20, firstName: 'Kritika', lastName: 'Ghosh', status: false, dob: '1991-11-03' },
]
};
// Creating a slice for user management using Redux Toolkit.
// Contains state and reducer logic.
const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    // Reducer to update an existing user's information based on their ID.
    updateUser: (state, action) => {
      const index = state.users.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
  },
});
// Exporting the action creator for updating users
export const { updateUser } = userSlice.actions;
// Exporting the reducer to be used in the Redux store
export default userSlice.reducer;
