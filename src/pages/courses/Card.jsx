// Card.jsx
import React, { useState } from 'react';
import './courses.css';
import Web3 from 'web3';
import Startlearning from './Startlearning';

function Card({ card }) {
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [transactionComplete, setTransactionComplete] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);

  async function connectToMetaMask() {
   // Request access to the MetaMask accounts
   await window.ethereum.request({ method: 'eth_requestAccounts' });

   // Create a Web3 instance using the MetaMask provider
   const web3Instance = new Web3(window.ethereum);
   setWeb3(web3Instance);

   // You can now use the web3 instance to interact with the blockchain
   // For example, you can get the connected account:
   const accounts = await web3Instance.eth.getAccounts();
   const connectedAddress = accounts[0];
   setAddress(connectedAddress);
   alert('Connected to MetaMask with address: ' + connectedAddress);

   // You can also send transactions using the web3 instance, for example:
  }

  async function transfer(price) {
    if (!web3) {
        console.log('Web3 instance not available. Connect to Logincards first.');
        return;
      }
  
      const valueInEther = price; // Change this to a smaller value, like '0.001'
      const valueInWei = web3.utils.toWei(valueInEther.toString(), 'ether');
      const transaction = {
        from: address,
        to: '0x70997970C51812dc3A010C7d01b50e0d17dc79C8',
        value: valueInWei,
      };
  
      try {
        const response = await web3.eth.sendTransaction(transaction);
        console.log('Transaction sent:', response);
        console.log('Done');
  
        // Set transaction status to true after the transaction is complete
        setTransactionComplete(true);
      } catch (error) {
        console.error('Error sending transaction:', error.message);
      }
  }

  // Function to handle "Start Learning" button click
  function handleStartLearning() {
    setSelectedCourseId(card.id);
  }

  return (
    <div className='flip-card' key={card.id}>
      <div className='flip-card-inner'>
        <div className='flip-card-front'>
          {/* ... Your existing card front ... */}
        </div>
        <div className='flip-card-back'>
          <div className='card'>
            {transactionComplete && selectedCourseId === card.id ? (
              <Startlearning selectedCourse={card} />
            ) : (
              <>
                
                {transactionComplete && (
                  <button className='btn btn-3' onClick={handleStartLearning}>
                    Start Learning
                  </button>
                )}
                {!transactionComplete && (
                    <>
                <button className='btn btn-1' onClick={connectToMetaMask}>
                     Connect to MetaMask
                    </button>
                  <button className='btn btn-2' onClick={() => transfer(card.price)}>
                    Buy @ {card.price} ETH
                  </button></>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
