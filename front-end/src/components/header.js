import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../css/header.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoMdHelpCircle } from 'react-icons/io';
import { FaSignOutAlt } from 'react-icons/fa';
import {  PiStethoscopeBold } from 'react-icons/pi';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    localStorage.clear();
    navigate('/main');
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOverlayClick = () => {
    setIsDropdownOpen(false);
  };
  return (
    <div>
      <header>
        <div className="title">
          <h1>
            <Link to="/home" className="nav-link">DiagnoS<PiStethoscopeBold />M</Link>
          </h1>
        </div>
        <div className="nav-bar">
          <ul>
            <li>
              <Link to="/home" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/questionnaire" className="nav-link">Questionnaire</Link>
            </li>
            <li>
              <Link to="/precautions" className="nav-link">Precautions</Link>
            </li>
            <li>
              <Link to="/feedback" className="nav-link">Feedback</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-container">
          <div className="hamburger" onClick={handleHamburgerClick}>
            <GiHamburgerMenu size={30} />
          </div>
          {isDropdownOpen && (
            <div className="dropdown">
              <ul>
                <li>
                  <Link to="/user-details" className="nav-drop-link">
                    <BsFillPersonFill /> My Profile
                  </Link>
                </li>
                <li>
                  <IoMdHelpCircle /> Help
                </li>
                <li onClick={handleSignOut}>
                  <FaSignOutAlt /> Sign Out
                </li>
              </ul>
            </div>
          )}
          {isDropdownOpen && (
            <div className="overlay" onClick={handleOverlayClick}></div>
          )}
        </div>


      </header>

    </div>
  )
}

export default Header
