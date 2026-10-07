import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/css/all.min.css';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css';
// Bootstrap JS (لتفعيل navbar-toggler, dropdown, modal ... إلخ)
import './assets/js/bootstrap.bundle.min.js';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
