import React, { useState } from 'react';
import '../css/past_records.css';
import Header from './header';
import Footer from './footer';

const PastRecords = () => {
    const [records, setRecords] = useState([
        { id: 1, disease: 'Migraine', accuracy: '90%' },
        { id: 2, disease: 'Malaria', accuracy: '80%' },
        // Add more records as needed
    ]);

    const handleDelete = (id) => {
        const updatedRecords = records.filter((record) => record.id !== id);
        setRecords(updatedRecords);
    };

    const handleSave = () => {
        // Implement your save logic here
        // This could involve sending a request to a server to save the records
        console.log('Records saved:', records);
    };
    const handleClearAll = () => {
        setRecords([]);
    };
    return (
        <div>
      <Header />
      <div className='hist'>
        <p className='history-msg'>Based on the records from your use of the DiagnoSym app</p>
        {records.length === 0 ? (
          <p className='no-records-msg'>No records are present.</p>
        ) : (
          <div className='grid-history'>
            {records.map((record) => (
              <div className='history-card' key={record.id}>
                <div className="card-header">
                  <h2>{record.disease} Diagnosis</h2>
                  <button className="delete-icon" onClick={() => handleDelete(record.id)}>
                    &#10006;
                  </button>
                </div>
                <div className="card-content">
                  You have been diagnosed with <span>{record.disease}</span> with a <span>{record.accuracy}</span> accuracy rate.
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="button-container">
          <button className="clear-all-btn" type='button' onClick={handleClearAll}>
            Clear All
          </button>
          <button className="save-btn" type='button' onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
    );
};

export default PastRecords;
