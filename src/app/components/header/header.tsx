'use client';
import React, { useState } from 'react';
import styles from './header.module.css';

type Lang = 'en' | 'fr' | 'pt';

const content: Record<Lang, { about: string; projects: string }> = {
  en: { about: 'About', projects: 'Projects' },
  fr: { about: 'À propos', projects: 'Projets' },
  pt: { about: 'Sobre', projects: 'Projetos' },
};

export default function Header() {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <nav className={styles.header}>
      <div className={styles.logoWrap} style={{ width: '140px' }}>
        <span className={styles.logoVf}>VF</span>
        <span className={styles.logoFull}>Vivian Fragoso</span>
      </div>

      <div className={styles.navRight}>
        <ul className={styles.navMenu}>
          <li><a className="active">{content[lang].about}</a></li>
          <li><a>{content[lang].projects}</a></li>
        </ul>

        <div className={styles.langSwitcher}>
          {(['en','fr','pt'] as Lang[]).map(l => (
            <React.Fragment key={l}>
              <button
                className={`${styles.langBtn} ${lang === l ? 'active' : ''}`}
                onClick={() => setLang(l)}
              >
                {l.toUpperCase()}
              </button>
              {l !== 'pt' && <span className={styles.langSep}>·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}