import React, { useState } from 'react';
import '../css/questionnaire.css';
import Header from '../components/header';
import Footer from '../components/footer';

function Questionnaire() {
    const questions = [
        "1.)Are you presently experiencing itching?",
        "2.)Do you currently have a skin rash?",
        "3.)Are you presently encountering chills?",
        "4.)Are you currently experiencing joint pain?",
        "5.)Have you recently vomited?",
        "6.)Are you presently feeling fatigued and experiencing a cough?",
        "7.)Are you presently having high fever?",
        "8.)Are you excessively sweating lately?",
        "9.)Are you presently suffering from a headache?",
        "10.)Have you observed yellowing of your skin recently?",
        "11.)Is your urine darker than usual?",
        "12.)Are you currently dealing with nausea?",
        "13.)Have you recently lost your appetite?",
        "14.)Are you presently facing abdominal pain?",
        "15.)Are you experiencing diarrhea at this time?",
        "16.)Have you noticed yellowing of your eyes?",
        "17.)Are you presently feeling unwell or experiencing malaise?",
        "18.)Are you currently suffering from chest pain?",
        "19.)Are you presently experiencing muscle pain?",
        "20.)Are you currently experiencing a cough?"

    ];

    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(''));
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleQuestionClick = (index) => {
        setSelectedQuestion(index);
    };

    const handleNext = () => {
        if (selectedQuestion < questions.length - 1) {
            setSelectedQuestion(selectedQuestion + 1);
        }
    };

    const handlePrevious = () => {
        if (selectedQuestion > 0) {
            setSelectedQuestion(selectedQuestion - 1);
        }
    };

    const handleAnswerChange = (event) => {
        const updatedAnswers = [...answers];
        updatedAnswers[selectedQuestion] = event.target.value;
        setAnswers(updatedAnswers);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const dataToSend = {};
        dataToSend['user'] = window.localStorage.getItem('username')
        questions.forEach((question, index) => {
            const key = question;
            const value = answers[index];
            dataToSend[key] = value === 'Yes' ? 'yes' : value === 'No' ? 'no' : '';
        });
        fetch('http://127.0.0.1:8000/api/process_questionnaire/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dataToSend),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                return fetch(`http://127.0.0.1:8000/prediction/${window.localStorage.getItem('username')}`);
            })
            .then((predictionResponse) => {
                if (!predictionResponse.ok) {
                    throw new Error('Prediction API response was not ok');
                }
                return predictionResponse.json();
            })
            .then((predictionData) => {
                console.log(predictionData);
                const { disease, accuracy } = predictionData[0];
                window.location.href = `./prediction/${encodeURIComponent(disease)}/${encodeURIComponent(accuracy)}`;
            })
            .catch((error) => {
                console.error(error);
            });

        setIsSubmitted(true);
    };

    return (<div>
        <Header />

        <div className="questionnaire">
            <div className="main-container">
                <div className="sidebar">
                    <ul className="question-list">
                        {questions.map((question, index) => (
                            <li
                                key={index}
                                className={`question-item ${selectedQuestion === index ? 'selected' : ''}`}
                                onClick={() => handleQuestionClick(index)}
                            >
                                {question}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    <div className="question">
                        <h5 className="question-title">{questions[selectedQuestion]}</h5>
                        <form onSubmit={handleFormSubmit}>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`question_${selectedQuestion}_yes`}
                                    value="Yes"
                                    checked={answers[selectedQuestion] === 'Yes'}
                                    onChange={handleAnswerChange}
                                />
                                <label className="form-check-label" htmlFor={`question_${selectedQuestion}_yes`}>
                                    Yes
                                </label>
                            </div>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id={`question_${selectedQuestion}_no`}
                                    value="No"
                                    checked={answers[selectedQuestion] === 'No'}
                                    onChange={handleAnswerChange}
                                />
                                <label className="form-check-label" htmlFor={`question_${selectedQuestion}_no`}>
                                    No
                                </label>
                            </div>
                            <div className="buttons">
                                {selectedQuestion > 0 && (
                                    <button type="button" className="button-form" onClick={handlePrevious}>
                                        Previous
                                    </button>
                                )}
                                {selectedQuestion === questions.length - 1 ? (
                                    <button type="submit" className="button-form">
                                        Submit
                                    </button>
                                ) : (
                                    <button type="button" className="button-form" onClick={handleNext}>
                                        Next
                                    </button>
                                )}
                            </div>
                        </form>
                        {isSubmitted && <div>Form Submitted!</div>}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>

    );
}

export default Questionnaire;