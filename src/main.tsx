import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClientProvider } from './context/ClientContext'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClientProvider>
        <App />
      </ClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
