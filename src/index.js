import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledEngineProvider } from '@mui/material/styles';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(  
  <React.StrictMode>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
