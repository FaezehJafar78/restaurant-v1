import React, {Component, useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import stylesheet from './Carousel.module.css';

export const Carousel = props => {
  const [iphonePortraitMatch, setIphonePortraitMatch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const iphonePortraitMatchNew =
        window.matchMedia('(max-width: 480px)').matches;
      if (iphonePortraitMatchNew !== iphonePortraitMatch) {
        setIphonePortraitMatch(iphonePortraitMatchNew);
      }
    }, 500);

    return () => clearInterval(interval);
  }, [iphonePortraitMatch]);

  const settings = {
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    className: 'center',
    centerPadding: '20px',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      {iphonePortraitMatch ? (
        <Slider {...settings}>{props.children}</Slider>
      ) : (
        <div className={stylesheet.flex}>{props.children}</div>
      )}
    </>
  );
};
