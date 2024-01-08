import React from 'react';
import Dictionary from './components/Dictionary';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <main>
        <Dictionary />
      </main>
      <Footer />
    </div>
  );
}

export default App;
