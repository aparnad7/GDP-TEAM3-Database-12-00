import React from 'react'
import { FaSearch } from 'react-icons/fa';
import  { useState, useEffect } from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Home = ({word,handleInputChange,searchClick}) => {

  const images = ['imag1.jpeg', 'image2.jpeg', 'image3.jpeg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  return (
    

<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
          <img
         src={images[currentIndex]}
         alt={`Image ${currentIndex + 1}`}
         className="slider-image"
      />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev" onClick={prevSlide}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next" onClick={nextSlide}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"></span>
  </a>
</div>

  )
}

export default Home
