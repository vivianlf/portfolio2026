'use client';
import React, { ReactNode } from 'react';
import Slide from './aboutSlide';
import styles from '../styles/about.module.css';

interface AboutMeSlideProps {
  title: string;
  text: string;
  image: string;
  imageClass?: string;
  children?: ReactNode; // social icons
}

export default function AboutMeSlide({ title, text, image, imageClass, children }: AboutMeSlideProps) {
  return (
    <Slide className={styles.twoColumns}>
      <div className={styles.imageWrap} style={{ flexDirection: 'column', alignItems: 'center' }}>
        <img src={image} alt={title} className={imageClass} />
        {children && <div style={{ marginTop: '1.8rem' }}>{children}</div>}
      </div>
      <div className={styles.text}>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </Slide>
  );
}