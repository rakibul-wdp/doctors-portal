import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Care from './Care';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
  return (
    <div>
      <Banner />
      <Info />
      <Services />
      <Care />
      <MakeAppointment />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
