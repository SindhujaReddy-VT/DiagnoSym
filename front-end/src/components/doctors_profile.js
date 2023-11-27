import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';
import '../css/doctors_profile.css';
import Header from './header';
import Footer from './footer';
import male from '../images/male_doctor.jpeg';
import female from '../images/female_doctor.jpeg';
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useParams } from 'react-router-dom';

const DoctorsProfile = () => {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const csvFilePath = '/doctors.csv';

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      complete: (result) => {
        const doctor = result.data.find((doctor) => doctor.id === id);
        setDoctorData(doctor);
      },
    });
  }, [id]);

  if (!doctorData) {
    return <p>Loading...</p>; 
  }

  const { name, gender, qualification, specialization } = doctorData;

  return (
    <div>
      <Header />
      <div className="doctor-profile-container">
        <div className="left-section">
          <img
            src={gender === 'M' ? male : female}
            alt={`${name}'s profile`}
          />
          <div>
            <h2>{name}</h2>
            <p>{qualification}</p>
          </div>
        </div>
        <div className="right-section">
          <h2>{name}</h2>
          <p><strong>Specialization:</strong> {specialization}</p>
          <p><strong>Contact:</strong> 123-456-7890</p>
          <p><strong>Office Address:</strong> 123 Medical Street, Cityville</p>
          <p><strong>Website:</strong> www.doctor.com</p>
          <div className="social-profiles">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsProfile;
