import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const CarouselComponent = () => {
  const slides = [
    {
      image: 'https://img.freepik.com/free-vector/learn-from-home-banner-with-education-icons_1361-2406.jpg?w=2000',
      link: 'https://www.example.com/page1',
    },
    {
      image: 'https://cdn5.vectorstock.com/i/1000x1000/21/04/e-learning-landing-page-concept-vector-25962104.jpg',
      link: 'https://www.example.com/page2',
    },
    {
      image: 'https://www.yudiz.com/wp-content/uploads/2019/06/ar-vr-development-social.jpg',
      link: 'https://www.example.com/page3',
    },
    // Add more image links here
  ];

  return (
    <Carousel showArrows={true} infiniteLoop={true} showThumbs={false} autoPlay={true} interval={5000} showStatus={false}>
      {slides.map((slide, index) => (
        <div key={index} className="carousel-slide">
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
            <img src={slide.image} alt={`Slide ${index + 1}`} />
          </a>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;