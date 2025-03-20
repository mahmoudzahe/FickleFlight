import React from 'react';
import HolidayCard from './HolidayCard';
import BaliImage from '../assets/Bali.png'; 
import PalawanImage from '../assets/PalawanImage.png';
import SwissImage from '../assets/SwissImage.png';
import BoracayImage from '../assets/BoracayImage.png';

function RecommendedHolidays() {
  const holidays = [
    { name: 'Bali', duration: '4D3N', price: 899, image: BaliImage },
    { name: 'Swiss', duration: '6D5N', price: 900, image: SwissImage },
    { name: 'Boracay', duration: '5D4N', price: 699, image: BoracayImage },
    { name: 'Palawan', duration: '4D3N', price: 789, image: PalawanImage },
  ];

  return (
    <section className="recommended-holidays py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0" style={{ fontSize: '1.5rem', fontWeight: 700 }}>
            Recommended Holidays
          </h2>
          <a href="#" className="text-primary" style={{ fontSize: '1rem' }}>
            View all holidays →
          </a>
        </div>
        <div className="row g-4">
          {holidays.map((holiday, index) => (
            <div className="col-md-3" key={index}>
              <HolidayCard
                name={holiday.name}
                duration={holiday.duration}
                price={holiday.price}
                image={holiday.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecommendedHolidays;