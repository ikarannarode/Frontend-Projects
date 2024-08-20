import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/fonts/bootstrap-icons.woff"
import { Categories } from './Categories';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Categories />
  </StrictMode >,
);
