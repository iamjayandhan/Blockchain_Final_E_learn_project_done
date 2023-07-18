import React, { useState } from 'react';
import './courses.css';

const Courses = () => {
    const [courses] = useState([
      {
        id: 1,
        imageSrc: 'https://leverageedu.com/blog/wp-content/uploads/2021/08/Best-Blockchain-Courses.png',
        title: 'BlockChain',
        text: "If you're looking to learn more about blockchain technology, check out Cryptocurrency to gain a fundamental understanding of the cryptocurrency landscape.",
        price: 10
      },
      {
        id: 2,
        imageSrc: 'https://www.optilingo.com/wp-content/uploads/2019/02/199154810.jpg',
        title: 'Cyber security',
        text: 'Become a cyber security specialist. The very latest up-to-date information and methods. We cover operating system security, privacy, and patching. DevSec, digital forensics, cloud security',
        price: 30
      },
      {
        id: 3,
        imageSrc: 'https://juergenkurtz.files.wordpress.com/2015/10/conf-luneburg-2015.jpg',
        title: 'C++',
        text: 'C++ is a high-level cross-platform general-purpose programming language. It was created at Bell Labs by Bjarne Stroustrup as an extension to the C programming language.',
        price: 40
      },
      {
        id: 4,
        imageSrc: 'https://techcrunch.com/wp-content/uploads/2016/02/shutterstock_348701531.jpg?w=730&crop=1',
        title: 'Training',
        text: 'The Central Line Placement Skills course follows the 2010 Central Venous Access Device central venous catheter insertion for HHC, which includes the use of the central line bundle kit',
        price: 50
      },
    ]);
  
    const [selectedCourse, setSelectedCourse] = useState(null);
  
    const handleOpenModal = (course) => {
      setSelectedCourse(course);
    };
  
    const handleCloseModal = () => {
      setSelectedCourse(null);
    };
  
    return (
      <div className="courses-page">
        <h1>Courses Page</h1>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <img src={course.imageSrc} alt={course.title} />
              <h3>{course.title}</h3>
              <button onClick={() => handleOpenModal(course)}>View More Details</button>
            </div>
          ))}
        </div>
  
        {selectedCourse && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()} style={{ width: '500px', height: '500px' }}>
              <img src={selectedCourse.imageSrc} alt={selectedCourse.title} />
              <h2>{selectedCourse.title}</h2>
              <p>{selectedCourse.text}</p>
              <p>Price: ${selectedCourse.price}</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default Courses;
  