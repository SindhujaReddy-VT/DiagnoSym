import React from 'react'

const questionnaire = () => {
    return (
        <div>
      <h1>Symptoms Questionnaire</h1>
      <form>
        <div>
          <label htmlFor="fatigue_radio">Do you feel very tired or fatigued?</label>
          <p>
            <input type="radio" name="yes_no" id="fatigue_radio" value="Yes" />
            <label htmlFor="fatigue_radio">Yes</label>
          </p>
          <p>
            <input type="radio" name="yes_no" id="fatigue_radio" value="No" />
            <label htmlFor="fatigue_radio">No</label>
          </p>
        </div>

        <div>
          <label htmlFor="swollen_neck_radio">Is your neck area swollen or enlarged?</label>
          <p>
            <input type="radio" name="yes_no" id="swollen_neck_radio" value="Yes" />
            <label htmlFor="swollen_neck_radio">Yes</label>
          </p>
          <p>
            <input type="radio" name="yes_no" id="swollen_neck_radio" value="No" />
            <label htmlFor="swollen_neck_radio">No</label>
          </p>
        </div>

        <div>
          <label htmlFor="muscle_pain_radio">Do you have muscle pain?</label>
          <p>
            <input type="radio" name="yes_no" id="muscle_pain_radio" value="Yes" />
            <label htmlFor="muscle_pain_radio">Yes</label>
          </p>
          <p>
            <input type="radio" name="yes_no" id="muscle_pain_radio" value="No" />
            <label htmlFor="muscle_pain_radio">No</label>
          </p>
        </div>

        <div>
          <label htmlFor="generally_unwell_radio">Do you feel generally unwell or sick?</label>
          <p>
            <input type="radio" name="yes_no" id="generally_unwell_radio" value="Yes" />
            <label htmlFor="generally_unwell_radio">Yes</label>
          </p>
          <p>
            <input type="radio" name="yes_no" id="generally_unwell_radio" value="No" />
            <label htmlFor="generally_unwell_radio">No</label>
          </p>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
    )
}

export default questionnaire
