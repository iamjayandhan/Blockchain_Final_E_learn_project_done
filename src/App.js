
import Courses from "./pages/courses/Courses";
import Contact from "./pages/contact/ContactForm";
import About from "./pages/about/About";
import Home from "./Components/home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CoursesNadmin from "./pages/courses/CoursesNadmin";
import { useState,useEffect } from "react";

import Web3 from "web3";
import Navbar from "./Components/navBar/NavBar";
import ContactForm from "./pages/contact/ContactForm";

  const contractaddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
  const ABI =[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "registerNewUserEvent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "Login",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "courseId",
          "type": "uint256"
        }
      ],
      "name": "addPurchasedCourse",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "checkAdmin",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "displayCourses",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "imgsrc",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "descrip",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "videourl",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "price",
              "type": "uint256"
            }
          ],
          "internalType": "struct Contract.Courses[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "displayUserProfile",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_imgsrc",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_descrip",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_videourl",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "getCourse",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "courseId",
          "type": "uint256"
        }
      ],
      "name": "hasPurchasedCourse",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "userName",
          "type": "string"
        }
      ],
      "name": "registerNewUser",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userCourses",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  
  // const _admin=false;
  // console.log("App",admin)

  function App() {
  
  
  const [account,setAccount] = useState("");  // To store account of user
  const [contract, setContract] = useState("");  // To store current instance of Contract

  useEffect(() => {
      connectToWeb3();
  }, []);

  const connectToWeb3 = async () => {
  if (window.ethereum) {
      try {
      //Connect to an Ethereum provider
      const acc = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3Instance = new Web3(window.ethereum);
      console.log("Web3 Instance Created");
       // Get the initial account
      
      setAccount(acc[0]);
      console.log("Account Initialized");
      

    // Listen for account changes
      window.ethereum.on('accountsChanged', accounts => {
      setAccount(accounts[0]);
      console.log("Account Switched");
      });
      // Instantiate the contract
      const contractInstance = new web3Instance.eth.Contract(
          ABI,
          contractaddress
      );
      setContract(contractInstance);
      console.log("Contract Instance Created");

      } catch (error) {
      console.error(error);
      }
  } 
  else {
      alert("Please install MetaMask or another Ethereum-compatible browser extension.");
      console.log('MetaMask not Found');
  }


};
console.log("APP -- contract",contract)

  return (
    
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home contract={contract} account={account} />} />
        <Route path="/about" element={<About contract={contract} account={account} />} />
        <Route path="/courses" element={ <Courses contract={contract} account={account} />} />
        <Route path="/contact" element={<ContactForm  contract={contract} account={account} />} />
      </Routes>
    </div>
  );
}

export default App;
