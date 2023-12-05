import React from 'react';
import { Link, useParams } from 'react-router-dom';
import '../css/prediction.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import migraine from '../images/psoriasis.png';

const Prediction = () => {
    const { disease, accuracy } = useParams();

    const accuracyValue = parseInt(accuracy, 10) || 0;

    return (
        <div>
            <Header />
            <div className="prediction-container">
                <div className="left-division">
                    <h2 className="info-message">
                        Based on the symptoms you have provided, our system suggests that you may be experiencing{' '}
                        <h3>{decodeURIComponent(disease)}</h3>. For a definitive diagnosis of your health condition,
                        we recommend consulting medical professionals, as detailed in the next section.
                    </h2>
                    <img src={migraine} alt="Predicted Disease" />
                </div>
                <div className="right-division">
                    <div className="progress-ring">
                        <CircularProgressbar
                            value={accuracyValue}
                            text={`${accuracyValue}%`}
                            strokeWidth={8}
                            styles={{
                                path: {
                                    stroke: '#630031',
                                },
                                text: {
                                    fill: '#630031',
                                },
                            }}
                        />
                    </div>
                    <div className="score">Prediction Probability: {accuracyValue}%</div>
                </div>
            </div>

            <div className="description">
                <h3>Disease Description: </h3>
                <p className="description">
                    <ul>
                        <li>Psoriasis is a chronic autoimmune skin disorder characterized by raised, red patches with silvery scales.</li>
                        <li>It can affect various body parts, causing discomfort, itching, and changes in nails.</li>
                        <li>Itching is common, and psoriasis may affect nails, causing pitting, discoloration, and thickening.</li>
                        <li>Psoriasis can be triggered by factors like stress, medications, and infections.</li>
                    </ul>
                </p>
            </div>
            <div className="prev-nex-buttons">
                <button>
                    <Link to={`/doctors_recommendation?disease=${disease}`} className="nav-link">
                        Next
                    </Link>
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default Prediction;
