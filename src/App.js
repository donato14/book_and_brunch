import React, { useState } from 'react'
import './App.scss';
import './_reset.scss';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';


function App() {
  return (
    <>
    <div className="App">
      <Header />
    </div>
    
    </>
  );
}

export default App;
