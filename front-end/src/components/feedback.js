// Feedback.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/feedback.css';
import Footer from './footer';
import Header from './header';
import { FaRegAngry } from "react-icons/fa";
import { ImSad } from "react-icons/im";
import { BsEmojiNeutral } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Feedback = () => {
  const [reviews, setReviews] = useState([]);
  const [feedbackContent, setFeedbackContent] = useState('');

  useEffect(() => {
    const username = window.localStorage.getItem("username");
    const getApiUrl = `http://127.0.0.1:8000/feedback/user/${username}/`;

    fetch(getApiUrl)
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
  }, []);

  const handleChange = (e) => {
    setFeedbackContent(e.target.value);
  };
  const handleClear = () => {
    setFeedbackContent('');
  };
  const handleSubmit = () => {
    const username = window.localStorage.getItem("username");
    const postApiUrl = `http://127.0.0.1:8000/feedback/post/${username}/`;

    fetch(postApiUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ content: feedbackContent }),
    })
      .then(response => response.json())
      .then(data => {
        setReviews([...reviews, data]);
        setFeedbackContent('');
      })
      .catch(error => console.error('Error submitting feedback:', error));
  };
  
  const iconSize = '2em';
  return (
    <div>
      <Header />
      <div className='main-feed'>
        <div className="feedback-content">
          {/* Left Div */}
          <div className="feedback-card">
            <p>How satisfied were you with your recent diagnosis with us?</p>
            <div className='emoji-container'>
              <FaRegAngry className='icon' style={{ fontSize: iconSize }} />
              <ImSad className='icon' style={{ fontSize: iconSize }} />
              <BsEmojiNeutral className='icon' style={{ fontSize: iconSize }} />
              <HiOutlineEmojiHappy className='icon' style={{ fontSize: iconSize }} />
              <BiHappyHeartEyes className='icon' style={{ fontSize: iconSize }} />
            </div>
          </div>

          {/* Right Div */}
          <div className="feedback-card">
            <p>Is there anything you would like to suggest us to improve the experience of our users?</p>
            <textarea
              className='cmt'
              placeholder="Write your Feedback....."
              rows={4}
              value={feedbackContent}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='sub-canc-clr'>
            {window.localStorage.loggedIn ? (
          <button type="button" onClick={handleSubmit}>Submit</button>
        ) : (
          <button type="button" disabled style={{ opacity: 0.5 }}>Submit</button>
        )}
          <Link to='/home'><button type="button">Cancel</button></Link>
          <button type="button" onClick={handleClear}>Clear</button>
        </div>
        <div className='comments'>
          <span className='commnt-text'>All Comments:</span>
          {reviews.map((review, index) => (
            <div key={index} className='comment-card'>
              <div className='usr'>
                <CgProfile size={25} />
                <span className='profile-usr'>
                  {review.author_first_name} {review.author_last_name}
                </span>
              </div>
              <p>{review.content}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
