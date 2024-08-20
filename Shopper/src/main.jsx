import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Shopper } from './components/Shopping/Shopper.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Shopper />
  </StrictMode>,
)
