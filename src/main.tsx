import React from 'react'
import ReactDOM from 'react-dom/client'
import { container } from 'tsyringe';
import App from './App.tsx'
import { AuthService } from './core/services/AuthService';
import './index.css'

container.registerSingleton(AuthService);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
