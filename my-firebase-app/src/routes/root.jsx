import React from 'react'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Contents from '../components/Contents/Contents'
import Footer from '../components/Footer/Footer'
import '../index.css'
import "@fontsource-variable/nunito-sans";

export default function Root() {
  return (
    <>
      <Header/>
      <Hero/>
      <Contents/>
      <Footer/>
    </>
  );
}