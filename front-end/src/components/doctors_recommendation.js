import React from 'react';
import { Link } from 'react-router-dom';
import '../css/doctors_recommendation.css';
import Header from './header';
import Footer from './footer';
import male from '../images/male_doctor.jpeg';
import female from '../images/female_doctor.jpeg';

const doctors_recommendation = () => {
    // Sample data for a doctor
    const doctor = {
        id: 1,
        name: 'Dr. John Doe',
        profileIcon: male, // Replace with the actual path to the profile icon image
        specialization: 'Cardiologist',
    };

    return (
        <div>
            <Header />
            <div className='rec-msg'>
            <p className="recommendation-message">
                <i>We recommend the following doctors who specialize in treating your specific condition. These healthcare professionals are here to provide you with expert care and support on your journey to recovery.</i>
            </p>

            </div>
            
            <div className='doctors-rec-card'>
                <div className='doctor-card'>
                    <img src={doctor.profileIcon} alt={`Profile icon of ${doctor.name}`} />
                    <div className='doctor-info'>
                        <h3>{doctor.name}</h3>
                        <p>{doctor.specialization}</p>
                        <Link to='/doctors_profile' className="profile-link">View Profile</Link>
                    </div>
                </div>
            </div>
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
}

export default doctors_recommendation;
