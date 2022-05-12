import React from 'react';
import Banner from './Banner';
import Care from './Care';
import Info from './Info';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Care />
    </div>
  );
};

export default Home;
