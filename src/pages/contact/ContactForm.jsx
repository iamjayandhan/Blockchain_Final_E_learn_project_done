import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css'; 
import Navbar from '../../Components/navBar/NavBar';

function ContactForm({contract,account}) {
  const [state, handleSubmit] = useForm("xpzgwdew");

  if (state.succeeded) {
    alert('Message sent successfully!');
  }

  return (
    <>
    <Navbar contract={contract} account={account}/>
    <form onSubmit={handleSubmit} className='contact-form '>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Your Name"
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
      />

      <label htmlFor="email">Email Address:</label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="yourname@example.com"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="subject">Subject:</label>
      <input
        id="subject"
        type="text"
        name="subject"
        placeholder="Subject of your message"
      />
      <ValidationError
        prefix="Subject"
        field="subject"
        errors={state.errors}
      />

      <label htmlFor="message">Message or Feedback:</label>
      <textarea
        id="message"
        name="message"
        placeholder="Your message or feedback"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>
  );
}

export default ContactForm;





// import React, { useState } from 'react';
// import './contact.css';
// import NavBarOther from '../../Components/navBar/NavBarOther';
// import Navbar from '../../Components/navBar/NavBar';
// const Input = ({ label, type, value, onChange }) => (
//   <div className="form-group">
//     <label htmlFor={label}>{label}:</label>
//     <input
//       type={type}
//       id={label}
//       value={value}
//       onChange={onChange}
//       required
//     />
//   </div>
// );

// const TextArea = ({ label, value, onChange }) => (
//   <div className="form-group">
//     <label htmlFor={label}>{label}:</label>
//     <textarea
//       id={label}
//       value={value}
//       onChange={onChange}
//       required
//     />
//   </div>
// );

// const Button = ({ type, disabled, children }) => (
//   <button type={type} disabled={disabled}>
//     {children}
//   </button>
// );

// const Contact = ({contract,account}) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate a delay for form submission (replace this with actual form submission logic)
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       console.log('Form submitted:', { name, email, message });
//     }, 2000);
//   };

//   return (
//     <>
// <Navbar contract={contract} account={account} />
//     <div className="contact-container">
//       <h1>Contact Us</h1>
//       {!isSubmitted ? (
//         <div>
//           <form onSubmit={handleSubmit}>
//             <Input
//               label="Name"
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Input
//               label="Email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <TextArea
//               label="Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <Button type="submit" disabled={isSubmitting}>
//               {isSubmitting ? 'Submitting...' : 'Submit'}
//             </Button>
//           </form>
//         </div>
//       ) : (
//         <div className="success-message">
//           <p>Thank you for your message! We will get back to you soon.</p>
//         </div>
//       )}
//     </div>
//     </>
//   );
// };

// export default Contact;

