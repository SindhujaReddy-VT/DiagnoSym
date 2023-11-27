import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse'; // Make sure to import Papa from 'papaparse'

import '../css/preventive_measure.css';
import Header from '../components/header';
import Footer from '../components/footer';

const PreventiveMeasure = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [data, setData] = useState([]);

  const predefinedSections = [
    'Lifestyle Recommendations',
    'Environmental Adjustments',
    'Medical and Professional Guidance',
    'Additional Tips and Resources',
  ];

  useEffect(() => {
    // Load CSV data
    Papa.parse('/preventive_measures.csv', {
      header: true,
      download: true,
      complete: (result) => {
        console.log('Parsed CSV data:', result.data); // Log the entire parsed data
        // Filter data for disease="Migraine"
        const migraineData = result.data.filter((item) => item.Disease === 'Migraine');
        console.log('Filtered Migraine Data:', migraineData); // Log the filtered data
        setData(migraineData);
      },
    });
  }, []); // Run the effect only once on mount

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div>
      <Header />
      
      <div className='preventive-measure-container'>
        <div className='page-heading'>
          Preventive Measures for Migraine
        </div>
        <p className='disclaimer'>
          <em>Disclaimer:</em> Taking steps to prevent health issues or manage existing conditions is crucial. Keep in mind that the suggestions provided are general guidelines, and for personalized advice and treatment plans tailored to your specific health needs, it's essential to consult with healthcare professionals. They can offer insights and recommendations based on your unique circumstances to ensure the most effective and suitable care for you.
        </p>
        <div className='clickable-sections'>
          {predefinedSections.map((sectionTitle, index) => (
            <div className='interest-section' key={index}>
              <button className='interest-button' onClick={() => toggleSection(sectionTitle)}>
                {`${index + 1}) ${sectionTitle}`}
              </button>
              {expandedSection === sectionTitle && (
                <div className='expanded-section-content'>
                  {data.map((item) => (
                    <div key={item.Disease}>
                      <ul>
                        {item[sectionTitle.replace(/ /g, '_')]
                          .split(', ')
                          .map((point, pointIndex) => (
                            <li key={pointIndex}>{point}</li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>




              )}
            </div>
          ))}
        </div>
      </div>
      <div className='prev-nex-buttons'>
        <button>
          <Link to="/doctors_recommendation?disease=Migraine" className="nav-link">Previous</Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default PreventiveMeasure;
