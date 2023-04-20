import React, { useState, useEffect, useCallback, memo } from 'react';
import { Parallax } from 'react-parallax';
import styles from './Infographic.module.css';
import { withTranslation } from "react-i18next";
import infographicImage from '../../img/svg/infographic3.png';

interface InfographicBlockProps {
  id: string;
  heading: string;
  text: string;
  position: {
    top: string;
    left: string;
  };
}

const Infographic: React.FC<{ t: any; id: string; title: string; blocks: InfographicBlockProps[] }> = memo(({ t, title, blocks }) => {
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
      <h3 className={styles.title}>{t(title)}</h3>
      {blocks.map((block, index) => (
        <div
          key={index}
          className={styles.textBox}
          style={{ top: block.position.top, left: block.position.left }}
        >
          <h4>{t(block.heading)}</h4>
          <p>{t(block.text)}</p>
        </div>
      ))}
    </div>
  </Parallax>
  );
});

export default withTranslation()(Infographic);
