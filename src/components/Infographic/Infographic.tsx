import React, { useState, useEffect, useCallback, memo } from 'react';
import { Parallax } from 'react-parallax';
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
    <Parallax bgImage={infographicImage} strength={300}>

      <div className={styles.container}>
      <div className={styles.heading1} style={{ top: '0%', left: '0%' }}>
          <h3>The 'Swiss Army Knife of Web3'</h3>
        </div>
        <br />
        <div className={styles.textBox} style={{ top: '5%', left: '0%' }}>
          <h4>Dynamic</h4>
          <p>Our platform adapts and evolves with users' needs, unlike static tools from other companies.</p>
        </div>

        <br />
        <div className={styles.textBox} style={{ top: '20%', left: '35%' }}>
          <h4>Actionable</h4>
          <p>We enable on-chain actions through AI-integrated smart contracts, ensuring a more interactive experience.</p>
        </div>
        <br />
        <div className={styles.textBox} style={{ top: '65%', left: '1%' }}>
          <h4>Multi-Modal</h4>
          <p>Other companies only use a single source of data. Web3r combines multiple on-chain and off-chain sources, utilizing proprietary AI models for diverse tasks and outputs.</p>
        </div>
        <br />
        <div className={styles.textBox} style={{ top: '70%', left: '35%' }}>
          <h4>Simple</h4>
          <p>Leveraging LLMs, we provide data tailored to users' understanding levels, avoiding unnecessary jargon and complex charts.</p>
        </div>
      </div>
    </Parallax>
  );
});

export default Infographic;
