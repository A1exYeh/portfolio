import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import HomePageLayout from './components/Homepage/HomePageLayout.tsx';
import ThemeToggler from './components/ThemeToggler.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeToggler />
    <HomePageLayout />
  </StrictMode>,
);
