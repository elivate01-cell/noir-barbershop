import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { DemoActionProvider } from './components/DemoAction.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DemoActionProvider>
      <App />
    </DemoActionProvider>
  </StrictMode>
);
