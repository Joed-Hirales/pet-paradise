import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://i.imgur.com/yeD9uG1.jpeg"
          alt="First slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://i.imgur.com/rBUQ0Gp.jpeg"
          alt="Second slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-flex w-100"
          src="https://i.imgur.com/7wpJ9Tx.jpeg"
          alt="Third slide"
          style={{ height: '550px', objectFit: 'cover' }}
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
