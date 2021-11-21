import React, { fragment } from 'react';
import stylesheet from './Banner.module.css';

const Banner = () => {
return (
  <fragment>
    <section className={stylesheet.banner}>
      <div className={stylesheet.headingSection}>
        <h1 className={stylesheet.heading}>
          تجربه غذایی اصیل و مدرن
          <br />
          {' '}
          به سبک سنترل پارک
        </h1>
        <h3>
          سنترل پرک محیطی دنج مناسب خانواده
          <br />
          {' '}
          برای تجربه غذاهای اصیل ایرانی در کنار خانواده
        </h3>
      </div>
    </section>
  </fragment>
);
};
export default Banner;
