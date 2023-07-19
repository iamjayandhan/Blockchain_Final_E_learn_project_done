import React, { useState, useEffect } from 'react';
import './courses.css';
import Web3 from 'web3';
import ReactDOM from 'react-dom';
import Navbar from '../../Components/navBar/NavBar';


function VideoPage({ videoUrl }) {
  const videoRef = React.createRef();

  const handleFullscreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <div>
      <video ref={videoRef} controls width='560' height='315'>
        <source src={videoUrl} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <button onClick={handleFullscreen}>Fullscreen</button>
      <h1>BlockChain</h1>
    </div>
  );
}


function Card({ card }) {
  const [address, setAddress] = useState('');
  const [web3, setWeb3] = useState(null);
  const [transactionComplete, setTransactionComplete] = useState(false);

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
      to: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
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

  function handleStartLearning() {
    // Open a new window
    const newWindow = window.open('', '_blank');
  
    // Create a new HTML document for the new window
    const newDocument = newWindow.document;
    const newRoot = newDocument.createElement('div');
    newRoot.id = 'root'; // Ensure the root element has the correct ID
    newDocument.body.appendChild(newRoot);
  
    // Render the VideoPage component inside the new window's root element
    ReactDOM.render(<VideoPage videoUrl={card.videoUrl} />, newRoot);
  
    // Close the new window if the user navigates away from it
    newWindow.onbeforeunload = () => newWindow.close();
  }
  function handleStartLearning() {
    // Open the video URL in a new tab
    window.open(card.videoUrl, '_blank');
  }

  return (
    <>
    <div className='ctn'>
      <div className='flip-card' key={card.id}>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <div className='card'>
              <img className='card-img-top' src={card.imgsrc} alt='CardImage cap' />
              <div className='card-body'>
                <h3 className='card-title'>{card.title}</h3>
                <p className='card-text'>{card.descrip}</p>
              </div>
            </div>
          </div>
          <div className='flip-card-back'>
            <div className='card'>
              {transactionComplete ? (
                <button className='btn btn-3' onClick={handleStartLearning}>
                  Start learning
                </button>
              ) : (
                <>
                  <button className='btn btn-1' onClick={connectToMetaMask}>
                    Connect to MetaMask
                  </button>
                  {console.log(card)}
                  <button className='btn btn-2' onClick={() => transfer(card.price)}>
                    Buy @ {parseInt(card.price)} ETH
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

function Courses({ contract, account }) {
  const [admin, setAdmin] = useState(false);
  const [courses, setCourses] = useState([]);
  const [newCardData, setNewCardData] = useState({
    id: '',
    imageSrc: '',
    title: '',
    text: '',
    price: '',
    videoUrl: '',
  });


  // Function to fetch courses from the contract
  async function fetchCourses() {
    try {
      const courseData = await contract.methods.displayCourses().call({ from: account });
      setCourses(courseData);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  }

  // Function to handle form submission and add the new course to the contract
  async function addCourse(newCourse) {
    try {
      const response = await contract.methods
        .getCourse(
          newCourse.id,
          newCourse.imageSrc,
          newCourse.title,
          newCourse.text,
          newCourse.videoUrl,
          newCourse.price
        )
        .send({ from: account });

      console.log('Course added:', response);
          setCourses([...courses, newCourse]);

    } catch (error) {
      console.error('Error adding course:', error);
    }
  }

  // Function to handle input changes for the new course form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCardData({ ...newCardData, [name]: value });
  };

  useEffect(() => {
    async function checkingAdmin() {
      try {
        const res = await contract.methods.checkAdmin().call({ from: account });
        console.log("contract:",contract)
        console.log("admin:",res)
        setAdmin(res);
      } catch (error) {
        console.error('Error checking admin:', error);
      }
    }

    checkingAdmin();
    fetchCourses();
  }, [contract, account]);

  return (
    <>
      <Navbar contract={contract} account={account} />
      <div className='cardcontainer'>
        {courses.map((course) => (
         
         <>{console.log(course)}
          <Card key={course.id} contract={contract} account={account} card={course} />
          </>
        ))}
        {admin ? (
          <div className='new-card-form'>
            <h2>Add a New Course</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const newCourse = {
                  id: parseInt(newCardData.id),
                  imageSrc: newCardData.imageSrc,
                  title: newCardData.title,
                  text: newCardData.text,
                  price: newCardData.price,
                  videoUrl: newCardData.videoUrl,
                };
                addCourse(newCourse);
              }}
            >
          <input
            type='number'
            name='id'
            placeholder='ID'
            value={newCardData.id}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='imageSrc'
            placeholder='Image URL'
            value={newCardData.imageSrc}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='title'
            placeholder='Title'
            value={newCardData.title}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='text'
            placeholder='Text'
            value={newCardData.text}
            onChange={handleInputChange}
          />
          <input
            type='number'
            name='price'
            placeholder='Price'
            value={newCardData.price}
            onChange={handleInputChange}
          />
          <input
            type='text'
            name='videoUrl'
            placeholder='Video URL'
            value={newCardData.videoUrl}
            onChange={handleInputChange}
          />
          <button type='submit'>Add Card</button>
            </form>
          </div>
        ) : (
          <h1>Form unaku kedaiyathu</h1>
        )}
      </div>
    </>
  );
}

export default Courses;
