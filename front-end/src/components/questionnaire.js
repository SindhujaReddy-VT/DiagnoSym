import React, { useState } from 'react';

const Questionnaire = () => {
    const [formData, setFormData] = useState({
        fatigue_radio: 'No',
        swollen_neck_radio: 'No',
        muscle_pain_radio: 'No',
        generally_unwell_radio: 'No',
        injections_sterilized_radio: 'No',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        const responseFormData = {
            user : window.localStorage.getItem("email") || '',
            fatigue_radio: formData.fatigue_radio,
            swollen_neck_radio: formData.swollen_neck_radio,
            muscle_pain_radio: formData.muscle_pain_radio,
            generally_unwell_radio: formData.generally_unwell_radio,
            injections_sterilized_radio: formData.injections_sterilized_radio,
        };

        fetch('http://127.0.0.1:8000/api/process_questionnaire/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(responseFormData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                // Handle the success response data
                console.log(data);
            })
            .catch((error) => {
                // Handle errors
                console.error(error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h1>Symptoms Questionnaire</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fatigue_radio">Do you feel very tired or fatigued?</label>
                    <input
                        type="radio"
                        name="fatigue_radio"
                        id="fatigue_radio_yes"
                        value="Yes"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="fatigue_radio_yes">Yes</label>
                    <input
                        type="radio"
                        name="fatigue_radio"
                        id="fatigue_radio_no"
                        value="No"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="fatigue_radio_no">No</label>
                </div>
                <div>
                    <label htmlFor="swollen_neck_radio">Is your neck area swollen or enlarged?</label>
                    <input
                        type="radio"
                        name="swollen_neck_radio"
                        id="swollen_neck_radio_yes"
                        value="Yes"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="swollen_neck_radio_yes">Yes</label>
                    <input
                        type="radio"
                        name="swollen_neck_radio"
                        id="swollen_neck_radio_no"
                        value="No"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="swollen_neck_radio_no">No</label>
                </div>

                <div>
                    <label htmlFor="muscle_pain_radio">Do you have muscle pain?</label>
                    <input
                        type="radio"
                        name="muscle_pain_radio"
                        id="muscle_pain_radio_yes"
                        value="Yes"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="muscle_pain_radio_yes">Yes</label>
                    <input
                        type="radio"
                        name="muscle_pain_radio"
                        id="muscle_pain_radio_no"
                        value="No"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="muscle_pain_radio_no">No</label>
                </div>

                <div>
                    <label htmlFor="generally_unwell_radio">Do you feel generally unwell or sick?</label>
                    <input
                        type="radio"
                        name="generally_unwell_radio"
                        id="generally_unwell_radio_yes"
                        value="Yes"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="generally_unwell_radio_yes">Yes</label>
                    <input
                        type="radio"
                        name="generally_unwell_radio"
                        id="generally_unwell_radio_no"
                        value="No"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="generally_unwell_radio_no">No</label>
                </div>

                <div>
                    <label htmlFor="injections_sterilized_radio">Have you received injections that were not properly sterilized?</label>
                    <input
                        type="radio"
                        name="injections_sterilized_radio"
                        id="injections_sterilized_radio_yes"
                        value="Yes"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="injections_sterilized_radio_yes">Yes</label>
                    <input
                        type="radio"
                        name="injections_sterilized_radio"
                        id="injections_sterilized_radio_no"
                        value="No"
                        onChange={handleInputChange}
                    />
                    <label htmlFor="injections_sterilized_radio_no">No</label>
                </div>
                {/* ... Repeat this pattern for other questionnaire fields ... */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Questionnaire;
