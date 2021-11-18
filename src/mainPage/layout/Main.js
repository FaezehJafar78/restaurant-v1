import React from 'react';
import stylesheet from './Main.module.css';
import { Carousel } from '../components/Carousel/Carousel';

import imageFood from '../../assets/Image/image 26.png';
import iconBuyFood from '../../assets/Icon/Group 235.png';

export const Main = () => {
    return (
      <div>
        <Carousel>
          <div className={stylesheet.carousel}>
            <img src={imageFood} className={stylesheet.carouselImage} alt="food" />
            <div className={stylesheet.carouselRow1}>
              <span>پیتزا پپرونی</span>
              <span>27 دقیقه</span>
            </div>
            <div>
              <span>پنیر موزارلا</span>
            </div>
            <div>
              <img src={iconBuyFood} className={stylesheet.iconBuyFood} alt="food" />
              <span>48T</span>
            </div>
          </div>
          <div>fseg</div>
          <div>fseg</div>
          <div>fseg</div>
        </Carousel>
        <p className={stylesheet.main}>main</p>
      </div>
    );
};
