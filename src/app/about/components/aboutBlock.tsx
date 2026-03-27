'use client';
import React from 'react';
import Slide from './aboutSlide';
import styles from '../styles/about.module.css';

interface Block {
  name: string;
  degree?: string;
  period?: string;
  topics?: string[];
  image?: string;
  imageRight?: boolean;
}

interface BlockSlideProps {
  title: string;
  subtitle?: string;
  blocks: Block[];
}

export default function BlockSlide({ title, subtitle, blocks }: BlockSlideProps) {
  return (
    <Slide>
      <div className={styles.text}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
      <div className={styles.universities}>
        {blocks.map((block, idx) => (
          <div key={idx} className={`${styles.university} ${block.imageRight ? styles.imageRight : ''}`}>
            {block.image && (
              <div className={styles.imageWrap}>
                <img src={block.image} alt={block.name} />
              </div>
            )}
            <div className={styles.uniText}>
              <h3 className={styles.uniName}>{block.name}</h3>
              {block.degree && block.period && (
                <p className={styles.uniDegree}>
                  {block.degree} ({block.period})
                </p>
              )}
              {block.topics && (
                <ul>
                  {block.topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Slide>
  );
}