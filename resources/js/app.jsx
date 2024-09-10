import './bootstrap';
import React from 'react';
import { createRoot } from 'react-dom/client';
import HelloReact from './components/HelloReact';
import Products from './components/Products';

// const root = createRoot(document.getElementById('react-app'));
// root.render(<HelloReact />);

const productRoot = createRoot(document.getElementById('product-react-app'));
productRoot.render(<Products />);