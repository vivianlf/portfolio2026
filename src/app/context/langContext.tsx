'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'en' | 'fr';
type LangContextType = {
  lang: Lang;
  setLang: React.Dispatch<React.SetStateAction<Lang>>;
};

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');

  // Ao carregar, ler do localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('lang') as Lang | null;
    if (savedLang) setLang(savedLang);
  }, []);

  // Sempre que mudar, salvar no localStorage
  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error('useLang must be used within LangProvider');
  return context;
}