import React from 'react';
import '../css/prediction.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import migraine from '../images/migrane.jpeg';

const Prediction = ({ predictedDisease, predictedImage, description }) => {
    // Set the static accuracy value to 87
    const accuracy = 87;

    return (
        <div>
            <Header />
            <div className="prediction-container">
                <div className="left-division">
                    <h2 className="info-message">Based on the symptoms you have provided, our system suggests that you may be experiencing <h3>MIGRANE</h3>. For a definitive diagnosis of your health condition, we recommend consulting medical professionals, as detailed in the next section.</h2>
                    <img src={migraine} alt="Predicted Disease" />
                    
                </div>
                <div className="right-division">
                    <div className="progress-ring">
                        <CircularProgressbar
                            value={accuracy}
                            text={`${accuracy}%`}
                            strokeWidth={8}
                            styles={{
                                path: {
                                    stroke: "#630031", // Progress ring color
                                },
                                text: {
                                    fill: "#630031", // Inside percentage color
                                },
                            }}
                        />
                    </div>
                    <div className="score">
                        Prediction Accuracy: {accuracy}%
                    </div>
                </div>
            </div>



            <div className="description">
                <h3>Disease Description: </h3>
                <p className="description">
                    <ul>
                        <li>Recurrent, severe headaches</li>
                        <li>Often one-sided, throbbing, and intense</li>
                        <li>Accompanied by symptoms like nausea, vomiting, and sensitivity to light and sound</li>
                        <li>May include an "aura" with visual disturbances; triggered by various factors</li>
                    </ul>
                </p>
            </div>
            <Footer />
        </div>
    );
};

export default Prediction;