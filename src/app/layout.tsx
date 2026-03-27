import './globals.css';
import Header from './components/header/header'; 
import Footer from './components/footer/footer'; 
import { LangProvider } from './context/langContext';

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio da Vivian',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LangProvider>
          <Header /> 
          {children} 
          <Footer /> 
        </LangProvider>
      </body>
    </html>
  );
}