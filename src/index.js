import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { BrowserRouter } from "react-router-dom";
import { QueriesObserver, QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
=======
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));
>>>>>>> eunseon
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
<<<<<<< HEAD
  
=======
>>>>>>> eunseon
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
