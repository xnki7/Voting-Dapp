import './App.css';
import { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import { contractAbi, contractAddress } from './constant/constant';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Login/>
    </div>
  );
}

export default App;
