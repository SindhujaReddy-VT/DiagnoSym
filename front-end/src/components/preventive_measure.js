import React from 'react'
import { Link } from 'react-router-dom';
import '../css/preventive_measure.css';
import Header from '../components/header';
import Footer from '../components/footer';

const preventive_measure = () => {
  return (
    <div>
      <Header />
      <div className='prev-nex-buttons'>
      <button>
          <Link to="/doctors_profile" className="nav-link">Previous</Link>
        </button>
      </div>
      <Footer />
    </div>
  )
}

export default preventive_measure
