 import Web3 from "web3";
import {useState,useEffect} from "react";
import LoginForm from "./Login/loginForm";
import NavBar from  "./navBar/NavBar";
import Home from "./home/Home";
import Courses from "../pages/courses/Courses";

const contractaddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const ABI = [
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
    }
  ];


function MetaMaskIntegration(){
    const [account,setAccount] = useState("");  // To store account of user
    const [contract, setContract] = useState("");  // To store current instance of Contract
    const [isLoginFormVisible, setLoginFormVisible] = useState(false);

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
const handleCloseLoginForm = () => {
    setLoginFormVisible(false);
  };

    return(
    <div>
        {/* <LoginForm contract = {contract} account = {account} onCloseForm={handleCloseLoginForm}/> */}
        <NavBar contract = {contract} account = {account}/>
      {/* <Home  contract = {contract} account = {account}/>
      <Courses  contract = {contract} account = {account}/> */}

    </div>
    )
}

export default MetaMaskIntegration;