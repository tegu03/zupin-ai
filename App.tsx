
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import HowItWorks from './components/HowItWorks';
import ComparisonSection from './components/ComparisonSection';
import PricingSection from './components/PricingSection';
import DisclaimerSection from './components/DisclaimerSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import DiagnosaDemo from './components/DiagnosaDemo';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <DiagnosaDemo />
        <ProblemSection />
        <HowItWorks />
        <ComparisonSection />
        <PricingSection />
        <DisclaimerSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
