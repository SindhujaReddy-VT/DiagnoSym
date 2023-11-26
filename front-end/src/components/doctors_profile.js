import React from 'react';
import '../css/doctors_profile.css';
import Header from './header';
import Footer from './footer';
import male from '../images/male_doctor.jpeg';
import female from '../images/female_doctor.jpeg';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Papa from 'papaparse';

const doctors_profile = () => {
  const doctorData = {
    name: 'Dr. John Doe',
    gender: 'male',
    degrees: ['MD', 'PhD'],
    specialization: 'Cardiologist',
    contact: '123-456-7890',
    officeAddress: '123 Medical Street, Cityville',
    website: 'www.doctorjohn.com',
  };
  const { name, gender, degrees, specialization, contact, officeAddress, website } = doctorData;

  return (
    <div>
      <Header />
      <div className="doctor-profile-container">

        <div className="left-section">
          <img
            src={gender === 'male' ? male : female}
            alt={`${name}'s profile`}
          />
          <div>
            <h2>{name}</h2>
            <p>{degrees.join(', ')}</p>
          </div>
        </div>

        <div className="right-section">
          <h2>{name}</h2>
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Contact:</strong> {contact}</p>
          <p><strong>Office Address:</strong> {officeAddress}</p>
          <p><strong>Official Website:</strong> {website}</p>

          <div className="social-profiles">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default doctors_profile;
