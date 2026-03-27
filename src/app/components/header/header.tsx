'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './header.module.css';
import { useLang } from '../../context/langContext';
import { useRouter } from 'next/navigation';

const content = {
  en: { about: 'About', projects: 'Projects' },
  fr: { about: 'Profil', projects: 'Projets' },
};

export default function Header() {
  const { lang, setLang } = useLang();
  const [revealed, setRevealed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // On load: show "Vivian Fragoso" briefly then return to "VF"
  useEffect(() => {
    const showTimer = setTimeout(() => setRevealed(true), 400);
    const hideTimer = setTimeout(() => setRevealed(false), 2200);
    return () => { clearTimeout(showTimer); clearTimeout(hideTimer); };
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback: navigate to home page with hash
      router.push(`/${sectionId}`);
    }
  };

  return (
    <nav className={styles.header}>
      <div className={`${styles.logoWrap} ${revealed ? styles.revealed : ''}`}>
        <span className={styles.logoVf}>VF</span>
        <span className={styles.logoFull}>Vivian Fragoso</span>
      </div>

      <div className={styles.navRight}>
        <ul className={styles.navMenu}>
          <li>
            <a
              className="active"
              onClick={() => handleNavClick('about')}
            >
              {content[lang].about}
            </a>
          </li>
          <li>
            <a
              onClick={() => handleNavClick('projects')}
            >
              {content[lang].projects}
            </a>
          </li>
        </ul>

        <div className={styles.langDropdown} ref={dropdownRef}>
          <button
            className={styles.langTrigger}
            onClick={() => setDropdownOpen(prev => !prev)}
          >
            {lang.toUpperCase()}
            <span className={`${styles.langArrow} ${dropdownOpen ? styles.langArrowOpen : ''}`}>▼</span>
          </button>

          <div className={`${styles.langMenu} ${dropdownOpen ? styles.langMenuOpen : ''}`}>
            {(['en', 'fr'] as const).map(l => (
              <button
                key={l}
                className={`${styles.langOption} ${lang === l ? styles.langOptionActive : ''}`}
                onClick={() => { setLang(l); setDropdownOpen(false); }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}