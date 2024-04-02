import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import './App.module.scss'

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <HomePage />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
