import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './carousel.css';

const CarouselComponent = () => {
  const slides = [
    {
      image: 'https://img.freepik.com/free-vector/digital-online-education-concept-blank-space-laptop_255625-422.jpg?w=1060&t=st=1689868245~exp=1689868845~hmac=b86f980abcd76940946a10a64eb6433f0c7c467481f8a465ed4c01c991fbc628',
      link: 'https://www.example.com/page1',
    },
    {
      image: 'https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg',
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