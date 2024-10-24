import "./globals.css";
import { Roboto, Cutive_Mono } from 'next/font/google'
 
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'], // Select the font weights you need
  variable: '--font-roboto', // Define a CSS variable for Tailwind usage
});

const cutive = Cutive_Mono({ 
  subsets: ['latin'],
  weight: ['400'], // Select the font weights you need
  variable: '--font-cutive', // Define a CSS variable for Tailwind usage
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${cutive.variable}`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
