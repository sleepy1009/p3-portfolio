import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import QualityProvider from './context/QualityProvider.jsx'
import './index.css'
import App from './App.jsx'
import '@fontsource/anton'
import '@fontsource/rowdies'
import '@fontsource/vt323'
import '@fontsource/creepster'
import '@fontsource/jetbrains-mono'
import '@fontsource/space-mono'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QualityProvider>
      <App />
    </QualityProvider>
  </StrictMode>,
)
