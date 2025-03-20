import React from 'react';
import StayCard from './StayCard';
import ArcticHutImage from '../assets/Arctic Hut Image.png';
import DiscoveryShoresImage from '../assets/Discovery Shores Image.png';
import LakeLouiseImage from '../assets/Lake Louise Image.png';
import MatterhornSuitesImage from '../assets/Matterhorn Suites Image.png';

function PopularStays() {
  const stays = [
    { name: 'Matterhorn Suites', rating: 4.9, price: 575, reviews: 60, image: MatterhornSuitesImage },
    { name: '2-Story beachfront suite Discovery Shores', rating: 4.8, price: 360, reviews: 116, image: DiscoveryShoresImage },
    { name: 'Single deluxe hut Arctic Hut', rating: 4.7, price: 420, reviews: 78, image: ArcticHutImage },
    { name: 'Deluxe King Room Lake Louise Inn', rating: 4.6, price: 244, reviews: 63, image: LakeLouiseImage },
  ];

  return (
    <section className="popular-stays py-5 text-center">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Popular Stays</h2>
          <a href="#" className="text-primary">View all stays →</a>
        </div>
        <div className="row g-4">
          {stays.map((stay, index) => (
            <div className="col-md-3" key={index}>
              <StayCard
                name={stay.name}
                rating={stay.rating}
                price={stay.price}
                reviews={stay.reviews}
                image={stay.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularStays;