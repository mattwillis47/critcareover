
import './App.css';
import User from './components/User';
import Landing from './components/Landing';
import Container from 'react-bootstrap/Container';
import { BsFillClipboard2PulseFill } from 'react-icons/bs';

// import { Component } from 'react';
function App() {
  return (
      <Container className="p3">
        <Container className="p-5 mb-4 bg-light rounded-3">
          <h1 className="header">ICHT Critical Care Data Science  <BsFillClipboard2PulseFill /></h1>
          
        </Container>
        <Landing />
      </Container>
  );
}

export default App;
