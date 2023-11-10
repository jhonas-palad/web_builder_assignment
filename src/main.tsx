import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { HeaderProvider } from './components/header.tsx'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeaderProvider>
      <App />
    </HeaderProvider>
  </React.StrictMode>,
)
