import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Weather App',
  description: 'A simple weather application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#191B1F] text-white antialiased">
        <div className="container mx-auto p-4">
          {children}
        </div>
      </body>
    </html>
  );
}
