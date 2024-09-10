import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Products from './components/Products';

const root = createRoot(document.getElementById('react-app'));
root.render(<Products />);