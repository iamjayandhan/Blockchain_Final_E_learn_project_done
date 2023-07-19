// About.jsx
import React from 'react';
import './about.css';
import NavBarOther from '../../Components/navBar/NavBarOther';
import Navbar from '../../Components/navBar/NavBar';
const Slide = ({ imageUrl, title, description }) => {
  return (
    <div className="about">
      <div className="about-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="about-content">
        <div className="about-title">{title}</div>
        <div className="about-description">{description}</div>
      </div>
    </div>
  );
};

const About = ({contract,account}) => {
  const slidesData = [
    {
      imageUrl: 'https://media.istockphoto.com/id/532264056/vector/welcome-inscription-hand-drawn-lettering.jpg?s=612x612&w=0&k=20&c=uGYn7w7SsQaakbXj_OksXL-nejJvxQTmNMiJIrpq5lo=',
      title: 'Welcome to Our E-Learning Platform',
      description: 'Our platform offers free introductions to the topics CAN, Ethernet, FlexRay, LIN, J1939, AUTOSAR and the Universal Measurement and Calibration Protocol (XCP). ',
    },
    {
      imageUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/001/091/067/datas/original.jpg',
      title: 'Flexible Learning Anytime, Anywhere',
      description: 'Sed fringilla aliquet elit, in vehicula augue lobortis sit amet. Vivamus vehicula nulla ac purus fermentum.',
    },
    {
      imageUrl: 'https://sonatalearning.com/wp-content/uploads/2021/05/istock-938516298-scaled.jpg',
      title: 'Expert Instructors and Engaging Courses',
      description: 'Proin sagittis, felis id interdum luctus, eros justo scelerisque arcu, vel aliquam arcu lectus non ipsum.',
    },
    {
      imageUrl: 'https://uploads-ssl.webflow.com/61083a0cdcb08d49dd955f35/615e203662cdb5614832f7cb_Group%2086.jpg',
      title: 'Join Our Learning Community Today',
      description: 'In tincidunt quam at dolor finibus, ut fermentum ipsum tempus. Vivamus elementum euismod augue.',
    },
    {
      imageUrl: 'https://elearningindustry.com/wp-content/uploads/2021/07/Create-Interactive-eLearning-Content-In-3-Steps.png',
      title: 'Interactive Learning Experience',
      description: 'Vestibulum sit amet risus quis mauris rhoncus convallis ac a nisi. Curabitur feugiat sapien nec feugiat gravida.',
    },
    {
      imageUrl: 'https://icieducation.co.uk/blog/wp-content/uploads/2017/10/icieducation.co_.uk-Being-Able-to-Learn-and-Study-At-Your-Own-Pace-1.jpg',
      title: 'Learn at Your Own Pace',
      description: 'Quisque pharetra lacus ac arcu rutrum, eu sagittis justo posuere. Ut dignissim purus et orci tincidunt rhoncus.',
    },
    {
      imageUrl: 'https://s3.amazonaws.com/coursera_assets/meta_images/generated/XDP/XDP~COURSE!~leading-diverse-teams-and-organizations/XDP~COURSE!~leading-diverse-teams-and-organizations.jpeg',
      title: 'Diverse Course Selection',
      description: 'Donec non lorem in quam pellentesque auctor. Vestibulum vitae risus volutpat, tincidunt lectus at, suscipit lorem.',
    },
    {
      imageUrl: 'https://images.prismic.io/edapp-website/YzRjZDA5ZmMtNDMxNS00ZTQ5LTliZDEtZmU1ODc5MjRkMjU3_skills-assessment-tools-jpg_iaa?auto=compress,format&rect=10,0,1340,700&w=1200&h=627',
      title: 'Skill Assessments and Certifications',
      description: 'Aenean dapibus est vel nunc ullamcorper, eu elementum eros blandit. Duis volutpat arcu et ligula dignissim feugiat.',
    },
    {
      imageUrl: 'https://media.smallbiztrends.com/2018/06/shutterstock_102124561.jpg',
      title: '24/7 Customer Support',
      description: 'Fusce nec libero at odio hendrerit facilisis eget sit amet dolor. Nullam et purus a elit cursus sollicitudin nec et ex.',
    },
  ];

  return (
    <>
<Navbar contract={contract} account={account} />
    <div className="about-container">
      {slidesData.map((slide, index) => (
        <Slide key={index} imageUrl={slide.imageUrl} title={slide.title} description={slide.description} />
      ))}
    </div>
    </>
  );
};

export default About;
