import React from 'react'
import { PiStethoscopeBold } from 'react-icons/pi';
import '../css/header_plain.css';

const header_plain = () => {
  return (
    <div>
      <header>
        <div className='head-plain'>
          <h1>DiagnoS<PiStethoscopeBold />M</h1>
        </div>
      </header>

    </div>
  )
}

export default header_plain


