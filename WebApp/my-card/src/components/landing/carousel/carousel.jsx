import React, { useState, useEffect } from 'react';

import Slide from '@material-ui/core/Slide';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import CarouselSlide from './slide';

import sample1 from '../../../assets/carousel/sample1.jpg';
import sample2 from '../../../assets/carousel/sample2.jpg';
import sample3 from '../../../assets/carousel/sample3.png';

const slides = [
    { backgroundImage: sample1, title: 'You choose what you share' },
    { backgroundImage: sample2, title: 'You choose when to share' },
    { backgroundImage: sample3, title: 'You choose who to share' },
];

function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default function Carousel(){
  const [index, setIndex] = useState(0);
  const content = slides[index];
  const numSlides = slides.length;

  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState('down');

  const onArrowClick = (direction) => {
    const increment = direction === 'left' ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === 'left' ? 'right' : 'left';
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
        setIndex(newIndex);
        setSlideDirection(oppDirection);
        setSlideIn(true);
    }, 500);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.keyCode === 39) {
        onArrowClick('right');
      }
      if (e.keyCode === 37) {
        onArrowClick('left');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div style={{  position: "relative", display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
      <Arrow
        direction='left'
        clickFunction={() => onArrowClick('left')}
      />
      <Slide in={slideIn} direction={slideDirection}>
        <div>
            <CarouselSlide content={content} />
        </div>
      </Slide>
      <Arrow
        direction='right'
        clickFunction={() => onArrowClick('right')}
      />
      {/*<div style={{  position: "absolute",
        width: "50px",
        top: "0",
        bottom: "0",
        background: "white",
        opacity: "0.5"}}>
      </div>*/}
    </div>
  );

}
