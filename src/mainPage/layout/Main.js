import React from 'react';
import stylesheet from './Main.module.css';
import Banner from '../components/Banner/Banner';
import OurStory from '../components/OurStory/ourStory';

export const Main = () => {
    return (
      <div>
        <Banner />
        <OurStory />
      </div>
    );
};
