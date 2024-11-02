import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import { createRoot } from 'react-dom/client';
import { CssBaseline } from '@mui/material';
import { theme } from './components/config/mui-config.js';
import App from './App.jsx';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </BrowserRouter>
)
