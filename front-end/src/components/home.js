import React, { useState, useEffect } from 'react'
import '../css/home.css';
import Header from '../components/header';
import Footer from '../components/footer';
import slide1 from '../images/slideimg4.webp';
import slide2 from '../images/slideimage4.jpeg';
import doctors from '../images/doctors.png';
import past_records from '../images/past_records.png';
import precautions from '../images/precautions.png';
import preventive_measures from '../images/preventive_measures.png';
import questionnaire from '../images/questionnaire.png';
import results from '../images/results.png';
import our_process from '../images/our_process.png';



const Home = () => {
  const images = [
    slide1, slide2
  ]; // Replace with your image file paths
  
  
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Increment the current slide, and loop back to the first slide if at the end
        setCurrentSlide((currentSlide + 1) % images.length);
      }, 3000); // Change the interval (in milliseconds) to control the slideshow speed
  
      return () => {
        // Clean up the interval when the component unmounts
        clearInterval(interval);
      };
    }, [currentSlide, images.length]);
    

  return (
    <div>
      <Header />
      <div className="slideshow">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? 'active' : ''}
          />
        ))}
      </div>

      <div class="services">
        <h3 class="title-services">Services and Solutions</h3>
        <div class="grid-services">
          <div class="item">
            <img class="questionnaire" src={questionnaire} alt="questionnaire" />
            <span class="box-title">Symptoms Questionnaire</span>
            <span class="box-text">Users who want to diagnose themselves can fill up & submit the symptoms questionnaire</span>
          </div>
          <div class="item">
            <img class="results" src={results} alt="results" />
            <span class="box-title">Disease Prediction Results</span>
            <span class="box-text">Our best trained ML models will analyze and predict the disease a user is suffering from</span>
          </div>
          <div class="item">
            <img class="doctors" src={doctors} alt="doctors" />
            <span class="box-title">Doctors recommendation</span>
            <span class="box-text">DiagnoSYM will recommend specialized doctors details according to the disease a user have</span>

          </div>
          <div class="item">
            <img class="preventive_measures" src={preventive_measures} alt="preventive_measures" />
            <span class="box-title">Preventive Measures</span>
            <span class="box-text">We provide all the preventive measures that a user can follow inorder to reduce the impact of disease</span>

          </div>
          <div class="item">
            <img class="precautions" src={precautions} alt="precautions" />
            <span class="box-title">Precautions</span>
            <span class="box-text">Our customers can always stop by to know about the precautions that one can take for a set of diseases</span>
          </div>
          <div class="item">
            <img class="past_records" src={past_records} alt="past_records" />
            <span class="box-title">Past Diagnosis Records</span>
            <span class="box-text">Our App users can always view or discard their latest diagnosis records</span>
          </div>
        </div>
      </div>
      <div class="our-process">
        <div class="rectangle">
          <div class="process-text">
            <h3>Our Process</h3>
            <span class="process">Disease Prediction System
              Select the symptoms you think you might have and our system will predict the disease or condition you are suffering from.
              Then you could also look up for specialized physicians for treatment
              We also provide preventive measures to be taken </span>

          </div>

          <img class="our_process" src={our_process} alt="our_process" />

        </div>


      </div>


      <Footer />
    </div>
  )
}

export default Home