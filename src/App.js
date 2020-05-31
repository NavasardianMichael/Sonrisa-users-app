import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import './app.css';
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
          <Header />
          <Content />
          <Footer />
      </div>
    </Router>
  );
}

export default App;
