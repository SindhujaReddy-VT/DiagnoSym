import React from 'react'
import '../css/footer.css';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillYoutube } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="copyrights">
                    <span>&copy; Copyrights</span>
                    <span>2023 diagnosym</span>
                </div>
                <div className="links">
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="social-media-icons-follow">
                    <span>Follow Us on</span>
                    <div className="social-media-icons">
                        <AiFillGithub />
                        <AiFillYoutube />
                        <RiTwitterXFill />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
