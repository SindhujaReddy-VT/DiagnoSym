import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(timer);
      }
    }, 50); // Adjust the typing speed as needed (in milliseconds).

    return () => {
      clearInterval(timer);
    };
  }, [text, currentIndex]);

  return <span>{displayText}</span>;
};

export default Typewriter;
