'use client';
import React, { ReactNode } from 'react';
import styles from '../styles/about.module.css';

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export default function Slide({ children, className }: SlideProps) {
  return <section className={`${styles.slide} ${className ?? ''}`}>{children}</section>;
}