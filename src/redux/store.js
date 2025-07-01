import { configureStore } from '@reduxjs/toolkit';

// Importing the userReducer from the user slice
import userReducer from '../features/users/userSlice';

// Creating the Redux store with the user reducer
export const store = configureStore({
  reducer: {
    // Registering the user slice under the key 'users'
    users: userReducer,
  },
});
