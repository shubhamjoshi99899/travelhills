import React from 'react'
import Navbar from './navbar';
import Header from './header';
import Service from './service';
import About from './about';
import Tours from './tours';
import Contact from './contact';
import Book from './book'
import Footer from './footer';
import Places from './places';
import Placesnavbar from './placesnavbar';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Service />
      <About />
      <Tours />
      <Placesnavbar />
      <Places />
      <Contact />
      <Book />
      <Footer />



    </div>
  )
}

export default Home;
