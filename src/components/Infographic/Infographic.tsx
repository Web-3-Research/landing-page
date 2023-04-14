import React, { useState, useEffect, useCallback, memo } from 'react';

// Import the CSS module
import styles from './Infographic.module.css';

import infographicImage from '../../img/svg/infographic2.png';

const Infographic: React.FC = memo(() => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateDimensions = useCallback(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const debounceResize = () => {
      const timeoutHandle = setTimeout(() => {
        updateDimensions();
      }, 100);
      return () => clearTimeout(timeoutHandle);
    };
  
    window.addEventListener('resize', debounceResize);
    return () => window.removeEventListener('resize', debounceResize);
  }, [updateDimensions]);

  return (
    <div className={styles.container}>
      <img className={styles.backgroundImage} src={infographicImage} alt="Infographic" />
      <div className={styles.textBox} style={{ top: '10%', left: '5%' }}>
        <h4>Text Box 1</h4>
        <p>Some content here...</p>
      </div>
      <div className={styles.textBox} style={{ top: '15%', left: '65%' }}>
        <h4>Text Box 2</h4>
        <p>Some content here...</p>
      </div>
      <div className={styles.textBox} style={{ top: '65%', left: '5%' }}>
        <h4>Text Box 3</h4>
        <p>Some content here...</p>
      </div>
      <div className={styles.textBox} style={{ top: '70%', left: '65%' }}>
        <h4>Text Box 4</h4>
        <p>Some content here...</p>
      </div>
    </div>
  );
});

export default Infographic;
