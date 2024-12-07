import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SidebarLayout from './components/sidebarLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SidebarLayout />
  </StrictMode>,
)
