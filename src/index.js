import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from "@nextui-org/react";
import { SnackbarProvider } from 'notistack';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider>
    <main className="dark text-foreground">
      <SnackbarProvider maxSnack={2} autoHideDuration={4000} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <App />
      </SnackbarProvider>
    </main>
  </NextUIProvider>
);