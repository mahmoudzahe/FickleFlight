import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import RecentSearches from './components/RecentSearches';
import PopularDestinations from './components/PopularDestinations';
import RecommendedHolidays from './components/RecommendedHolidays';
import PopularStays from './components/PopularStays';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <RecentSearches />
      <PopularDestinations />
      <RecommendedHolidays />
      <PopularStays />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;