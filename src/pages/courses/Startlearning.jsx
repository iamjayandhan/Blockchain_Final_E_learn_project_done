// StartLearning.jsx
import React from 'react';
import "./courses.css"

function StartLearning({ selectedCourse }) {
  // Define the "videoArray" for each course with video details
  const videoArray = [
    {
      title: 'Introduction to Blockchain',
      description: 'This is an introductory video on Blockchain.',
      videoUrl: 'https://example.com/introduction_to_blockchain.mp4',
    },
    {
      title: 'Cyber Security Fundamentals',
      description: 'This video covers the fundamentals of Cyber Security.',
      videoUrl: 'https://example.com/cyber_security_fundamentals.mp4',
    },
    // Add more video objects for each course...
  ];

  return (
    <div>
      <h1>Start Learning - {selectedCourse.title}</h1>
      {videoArray.map((video, index) => (
        <div key={index}>
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          {/* Embed the video using the <video> element */}
          <video width="640" height="360" controls>
            <source src={video.videoUrl} type="video/mp4" />
            {/* Add more source elements for other video formats (e.g., WebM, Ogg) */}
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}

export default StartLearning;
