// app/layout.tsx
import './globals.css';
import Header from './components/header/header'; // seu Header

export const metadata = {
  title: 'Meu Portfólio',
  description: 'Portfólio da Vivian',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* Header aparece em todas as páginas */}
        {children} {/* Aqui entram todas as páginas */}
      </body>
    </html>
  );
}