import React from 'react';
import './App.css';
import JsonToCsvConverter from './components/JsonToCsvConverter';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='text-3xl mx-auto text-center'>JSON to CSV Converter</h1>
        <JsonToCsvConverter />
      </header>
    </div>
  );
}

export default App;
