import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Papa from 'papaparse';
import '../css/doctors_recommendation.css';
import Header from './header';
import Footer from './footer';
import male from '../images/male_doctor.jpeg';
import female from '../images/female_doctor.jpeg';

const DoctorsRecommendation = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const disease = queryParams.get('disease');

  useEffect(() => {
    const csvFilePath = '/doctors.csv';

    Papa.parse(csvFilePath, {
      download: true,
      header: true,
      complete: (result) => {
        const filteredDoctors = result.data.filter((doctor) => doctor.disease === disease);
        setDoctors(filteredDoctors);
        setLoading(false); // Set loading to false after data is fetched
      },
    });
  }, [disease]);

  return (
    <div>
      <Header />
      <div className='rec-msg'>
        <p className="recommendation-message">
          <i>We recommend the following doctors who specialize in treating your specific condition. These healthcare professionals are here to provide you with expert care and support on your journey to recovery.</i>
        </p>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : doctors.length === 0 ? (
        <p>No doctors found for the specified condition. Please consult with your healthcare provider for further assistance.</p>
      ) : (
        <div className='doctors-rec-card'>
          {doctors.map((doctor) => (
            <div key={doctor.id} className='doctor-card'>
              <img src={doctor.gender === 'M' ? male : female} alt={`${doctor.name}'s profile`} />
              <div className='doctor-info'>
                <h3>{doctor.name}</h3>
                <p>{doctor.specialization}</p>
                <Link to={`/doctors_profile/${doctor.id}`} className="profile-link">View Profile</Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className='prev-nex-buttons'>
        <button>
          <Link to="/prediction" className="nav-link">Previous</Link>
        </button>
        <button>
          <Link to="/preventive_measure" className="nav-link">Next</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default DoctorsRecommendation;
