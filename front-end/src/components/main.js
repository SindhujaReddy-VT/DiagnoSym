import React from 'react'
import { Link } from 'react-router-dom';
import '../css/main.css';
import Header2 from '../components/header_plain';
import Footer from '../components/footer';
import Mainbg from '../images/bg2.jpeg';

const main = () => {
    return (
        <div>
            <Header2 />
            <div className='container-m'>
                <div className='main-bg'
                    style={{
                        backgroundImage: `url(${Mainbg})`,
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}>
                    <div className='sl-title'>Discover Your Health Journey with DiagnoSym</div>
                    <div className='sl-buttons'>
                        <button className='sl-button'><Link to="/sign-in" className="nav-link">LOGIN</Link></button>
                        <button className='sl-button'><Link to="/sign-up" className="nav-link">SIGN UP</Link></button>
                    </div>
                    <div className='sl-internal'>
                        Empower yourself to self-diagnose symptoms, receive precise predictions, connect with specialized doctors, and access personalized health precautions. Your journey to better health begins here with DiagnoSym
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default main
