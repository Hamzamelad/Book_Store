import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './contexts/authcontext';
import { DataProvider } from './contexts/datacontext';
import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <DataProvider>
        <GoogleOAuthProvider clientId='236835452498-0m40msc08eo4spulp87q83mblt6ic3mf.apps.googleusercontent.com'>
          <App />
        </GoogleOAuthProvider>
      </DataProvider>
    </AuthProvider>   
  </React.StrictMode>
);

