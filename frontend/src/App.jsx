import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers'

import './App.css';

function App() {
  const [currentAccount, setCurrentAccount] = useState();

  const checkIfWalletIsConnected = async () => {
    try {
      // Make sure we have access to windows.ethereum
      const {ethereum} = window;
      
      if(!ethereum) {
        console.log("Make sure you have metamask!");
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      // Check if we're authorized to access the user's wallet
      const accounts = await ethereum.request({method: 'eth_accounts'});

      if(accounts !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account', account);
        setCurrentAccount(account);
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Get access to metamask account (connect wallet to web)
  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      if(!ethereum) {
        alert('Get Metamask!');
        return;
      }

      const accounts = await ethereum.request({method: 'eth_requestAccounts'});

      console.log('Connected', accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  }

  const wave = async () => {
    try {
      const {ethereum} = window;

      if(ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(contractAddres, contractABI, signer);

        let count = await wavePortalContract.getTotalWaves();
        console.log('Retrieved total wave count...', count.toNumber());
      } else {
        console.log("Ethereum object doesn't exits!");
      }
    } catch (error) {
      console.log(error);
    }
  }


  // This runs our functions when the page loads.
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
   <>
    <div className='mainContainer'>
      <div className='dataContainer'>
        <div className='header'>
          <h1>👋 ¡Hola!</h1>
        </div>

        <div className='bio'>
          Me llamo <strong>Matías</strong>. He estado aprendiendo a desarrollar en React.js y Solidity gracias a <strong>@buildspace🦄</strong>
        </div>

        {/* 
          If there is no a user connected, render this button
        */}

        {!currentAccount ?
          (
            <button className='connectButton' onClick={connectWallet}>
              ¡Conecta tu wallet!
            </button>
          ) :
          
          (
            <button className='waveButton' onClick={wave}>
              ¡Saludame!
            </button>
          )
          
        }

      </div>
    </div>
   </>
  )
}

export default App;
