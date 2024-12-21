import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as amplitude from '@amplitude/analytics-browser'

import './index.css'
import App from './App.tsx'

if (import.meta.env.PROD) amplitude.init('a3ae62b39acfd37c5db779339f11ba7b', { autocapture: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
