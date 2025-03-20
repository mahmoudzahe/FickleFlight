import React from 'react';
import HotelIcon from '../assets/Hotel.png';
import AttractionsIcon from '../assets/Attractions.png';
import EatsIcon from '../assets/Eats.png';
import CommuteIcon from '../assets/Commute.png';
import TaxiIcon from '../assets/Taxi.png';
import MoviesIcon from '../assets/Movies.png';
import FlightIcon from '../assets/airplane.png';

function RecentSearches() {
  const searches = [
    { from: 'SIN', to: 'LAX', date: '7 Sep 2021' },
    { from: 'MY', to: 'DUB', date: '9 Sep 2021' },
  ];

  const tripOptions = [
    { name: 'Hotel', icon: HotelIcon, color: '#FF6F91' },
    { name: 'Attractions', icon: AttractionsIcon, color: '#FF9F43' },
    { name: 'Eats', icon: EatsIcon, color: '#00C4B4' },
    { name: 'Commute', icon: CommuteIcon, color: '#FFC107' },
    { name: 'Taxi', icon: TaxiIcon, color: '#40C4FF' },
    { name: 'Movies', icon: MoviesIcon, color: '#4CAF50' },
  ];

  return (
    <section className="recent-searches py-5 text-center">
      <div className="container">
        <h2
          style={{
            width: '1280px',
            height: '19px',
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: '19px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#303030',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
            textAlign: 'left',
            marginBottom: '1.5rem',
          }}
        >
          RECENT SEARCHES
        </h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {searches.map((search, index) => (
            <div
              key={index}
              style={{
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                gap: '15px',
                width: '632.5px',
                height: '112px',
                border: '1px solid #EAEAEA',
                borderRadius: '8px',
                flex: 'none',
                order: 0,
                flexGrow: 1,
                backgroundColor: '#fff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#1262AE',
                  }}
                >
                  {search.from}
                </span>
                <img
                  src={FlightIcon}
                  alt="Flight Icon"
                  style={{
                    width: '60px',
                    height: '24px',
                  }}
                />
                <span
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#1262AE',
                  }}
                >
                  {search.to}
                </span>
              </div>
              <span
                style={{
                  width: '217px',
                  height: '21px',
                  fontFamily: 'Roboto',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '21px',
                  letterSpacing: '0.04em',
                  textTransform: 'capitalize',
                  color: '#000000',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                  alignSelf: 'center',
                }}
              >
                Depart On: {search.date}
              </span>
            </div>
          ))}
        </div>
        <div
          className="trip-options mt-5"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '20px',
            width: '1280px',
            height: '132.39px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <h3
            style={{
              fontSize: '1rem',
              fontWeight: 700,
              color: '#6C757D',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            PREPARE FOR YOUR TRIP
          </h3>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '1280px',
              padding: '0 20px',
            }}
          >
            {tripOptions.map((option, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '0px',
                  gap: '8px',
                  margin: '0 auto',
                  width: '65.39px',
                  height: '91.39px',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                <div
                  style={{
                    backgroundColor: option.color,
                    borderRadius: '15px',
                    width: '65.39px',
                    height: '65.39px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={option.icon}
                    alt={option.name}
                    style={{ width: '40px', height: '40px' }}
                  />
                </div>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#6C757D',
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {option.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default RecentSearches;