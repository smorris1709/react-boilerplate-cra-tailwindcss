/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Use consistent styling
import './styles/tailwind.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import reportWebVitals from 'reportWebVitals';
import { QueryClient, QueryClientProvider } from 'react-query';

const client = new QueryClient({});

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

ReactDOM.render(
  <HelmetProvider>
    <QueryClientProvider client={client}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>
  </HelmetProvider>,
  MOUNT_NODE,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
