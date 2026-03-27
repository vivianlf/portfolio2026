'use client';
import React from 'react';
import styles from './footer.module.css';
import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa';
import { useLang } from '../../context/langContext';
import content from '../../about/data/aboutContent.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();

  const footer = content.footer[lang];

  return (
    <footer className={styles.footer}>
      {/* CTA Section */}
      <div className={styles.cta}>
        <p>
          {footer.cta} &rarr;{" "}
          <a href="mailto:vivianleitef@gmail.com">
            vivianleitef@gmail.com
          </a>
        </p>
      </div>

      {/* Bottom Section */}
      <div className={styles.bottom}>
        <p>© {currentYear} {footer.rights}</p>

        <div className={styles.socialIcons}>
          <a href="mailto:vivianleitef@gmail.com"><FaEnvelope /></a>
          <a href="tel:+33767897446"><FaPhone /></a>
          <a href="https://www.linkedin.com/in/vivian-fragoso-71101321a" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </footer>
  );
}