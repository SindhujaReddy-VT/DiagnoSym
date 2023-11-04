import React, { useState } from 'react'
import '../css/header.css'
import logo from '../logo/logo_v1.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import {BsFillPersonFill} from 'react-icons/bs';
import {IoMdHelpCircle} from 'react-icons/io';
import {FaSignOutAlt} from 'react-icons/fa';

const Header = () => {
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
                <div className="logo-title"><img className="logo" src={logo} alt="logo" />

                    <div className="title">
                        <h1 className="title-d">D</h1>
                        <h1 className="title-iagno">iagno</h1>
                        <h1 className="title-SYM">SYM</h1>
                    </div>
                </div>
                <div className="nav-bar">
                    <ul>
                        <li>Home</li>
                        <li>Questionnaire</li>
                        <li>Doctors</li>
                        <li>Precautions</li>
                    </ul>
                </div>
                <div className="dropdown-container">
      <div className="hamburger" onClick={handleHamburgerClick}>
        <GiHamburgerMenu size={30} />
      </div>
      {isDropdownOpen && (
        <div className="dropdown">
          <ul>
            <li><BsFillPersonFill/> My Profile</li>
            <li><IoMdHelpCircle/> Help</li>
            <li><FaSignOutAlt/> Sign Out</li>
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

