import React, { useState, useEffect } from 'react';
import '../css/past_records.css';
import Header from './header';
import Footer from './footer';

const PastRecords = () => {
    const username = window.localStorage.getItem('username');
    const [records, setRecords] = useState([]);

    const handleDelete = (id) => {
    };

    const handleSave = () => {
    };

    const handleClearAll = () => {
        setRecords([]);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/past_records/${username}`);
                console.log('Raw response:', response);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log('Parsed JSON data:', data);
                setRecords(data);
            } catch (error) {
                console.error('Error fetching past records:', error);
            }
        };

        fetchData();
    }, [username]);



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
