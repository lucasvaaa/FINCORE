import './main.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'

import { AppRoutes } from './routes/AppRoutes'
import { DashboardThemeProvider } from './pages/Dashboard/ThemeContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

      <DashboardThemeProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </DashboardThemeProvider>
  </StrictMode>,
)
