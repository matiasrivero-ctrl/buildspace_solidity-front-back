import React, { useEffect } from 'react';
import './App.css';

function App() {
  const checkIfWalletIsConnected = () => {
    const {ethereum} = window;
    
    if(!ethereum) {
      console.log("Make sure you have metamask!");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className='App'>
      <h1>Welcome to web3</h1>
    </div>
  )
}

export default App;
