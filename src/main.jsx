import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';  
import './index.css'; // Global style
import App from './App'; // Main App component
// Importing ToastContainer for notifications 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Importing Redux store and Provider for state management
import { store } from './redux/store';
import { Provider } from 'react-redux';

// Importing React Router's BrowserRouter for client-side routing
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Providing the Redux store to the entire application */}
    <Provider store={store}>
      {/* Wrapping the app in BrowserRouter to enable routing */}
      <BrowserRouter>
        <App />
        <ToastContainer position="top-right" autoClose={1000} />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
