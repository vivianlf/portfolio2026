'use client';
import React from 'react';
import Slide from './aboutSlide';
import styles from '../styles/about.module.css';

interface Client {
  name: string;
  logo: string; 
  link?: string; 
}

interface FreelancerSlideProps {
  title: string;
  subtitle?: string;
  clients: Client[];
}

export default function FreelancerSlide({ title, subtitle, clients }: FreelancerSlideProps) {
  return (
    <Slide className={styles.twoColumns}>
      <div className={styles.text}>
        <h2>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>

      <div className={styles.freelancerCards}>
        {clients.map((client, idx) => (
          <a
            key={idx}
            href={client.link ?? '#'}
            target="_blank"
            rel="noreferrer"
            className={styles.clientCard}
            style={{ zIndex: clients.length - idx }} // sobreposição
          >
            <img src={client.logo} alt={client.name} />
          </a>
        ))}
      </div>
    </Slide>
  );
}