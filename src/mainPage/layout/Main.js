import React from 'react';
import stylesheet from './Main.module.css';
import Banner from '../components/Banner/Banner';

export const Main = () => {
    return (
      <div>
        <p className={stylesheet.main} />
        <Banner />
      </div>
    );
};
