import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import PracticeAreas from './components/PracticeAreas';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Stats from './components/Stats';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <PracticeAreas />
        <Insights />
        <Careers />
        <Stats />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}
