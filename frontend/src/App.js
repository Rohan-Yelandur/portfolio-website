import React from 'react';
import './App.css';
import Desktop from './components/Desktop/Desktop';
import { DesktopProvider } from './context/DesktopContext';

function App() {
  return (
    <DesktopProvider>
      <Desktop />
    </DesktopProvider>
  );
}

export default App;
