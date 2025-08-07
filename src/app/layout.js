import './globals.css';
import { ThemeProvider } from '../contexts/ThemeContext';

export const metadata = {
  title: 'Theme Switcher',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
