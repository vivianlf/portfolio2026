'use client';
import React, { ReactNode } from 'react';
import styles from '../styles/about.module.css';

interface Block {
  name: string;
  degree?: string;
  period?: string;
  topics?: string[];
  image?: string;
  imageRight?: boolean;
}

interface AboutSlideProps {
  title: string;
  subtitle?: string;
  text?: string;
  image?: string;
  imageRight?: boolean;
  blocks?: Block[];
  imageClass?: string; // optional custom class for image
  children?: ReactNode; // optional extra content inside slide (like icons)
}

export default function AboutSlide({
  title,
  subtitle,
  text,
  image,
  imageRight,
  blocks,
  imageClass,
  children,
}: AboutSlideProps) {
  const isTwoColumns = !!image && !blocks;

  return (
    <section
      className={`${styles.slide} ${isTwoColumns ? styles.twoColumns : ''} ${
        imageRight ? styles.imageRight : ''
      }`}
    >
      {/* Text section */}
      <div className={styles.text}>
        <h2>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
      </div>

      {/* Single image slide */}
      {image && !blocks && (
        <div className={styles.imageWrap}>
          <img
            src={image}
            alt={title}
            className={imageClass ?? ''}
          />
          {/* Render any children (like social icons) below the image */}
          {children && <div className={styles.socialWrapper}>{children}</div>}
        </div>
      )}

      {/* Multiple block slide (universities / professional experience) */}
      {blocks && (
        <div className={styles.universities}>
          {blocks.map((block, idx) => (
            <div
              key={idx}
              className={`${styles.university} ${
                block.imageRight ? styles.imageRight : ''
              }`}
            >
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
                {block.topics && block.topics.length > 0 && (
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
      )}
    </section>
  );
}