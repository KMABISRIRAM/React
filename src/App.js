import React from 'react';
import { CounterProvider } from './components/CounterContext';  
import CounterDisplay from './components/CounterDisplay';
import CounterControls from './components/CounterControls';

const App = () => {
  return (
    <CounterProvider>
      <div>
        <h1>Simple Counter App</h1>
        <CounterDisplay />
        <CounterControls />
      </div>
      
    </CounterProvider>
  );
};

export default App;
