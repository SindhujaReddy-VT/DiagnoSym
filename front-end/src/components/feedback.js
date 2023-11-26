import React from 'react';
import '../css/feedback.css';
import Footer from './footer';
import Header from './header';
import { FaRegAngry } from "react-icons/fa";
import { ImSad } from "react-icons/im";
import { BsEmojiNeutral } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { BiHappyHeartEyes } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const feedback = () => {
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
            <p>Is there anything would you like to suggest us to improve the experience of our users</p>
            <textarea
              className='cmt'
              placeholder="Write your Feedback....."
              rows={4}
            />
          </div>
        </div>
        <div className='sub-canc-clr'>
          <button type="button">Submit</button>
          <button type="button">Cancel</button>
          <button type="button">Clear</button>
        </div>
        <div className='comments'>
          <span className='commnt-text'>All Comments:</span>
          <div className='comment-card'>
            <div className='usr'>
              <CgProfile size={25} />
              <span className='profile-usr'>
                John
              </span>
            </div>
            <p>The DiagnoSym app is really helpful for people who are suffering from symptoms and want to diagonize themselves.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default feedback;
