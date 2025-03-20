import React, { useState } from 'react';

function HeroSection() {
  const [destinationFrom, setDestinationFrom] = useState('');
  const [destinationTo, setDestinationTo] = useState('');
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('Return');

  const handleSearch = (event) => {
    event.preventDefault();
    if (destinationFrom && destinationTo && date) {
      alert(`Searching for ${tripType} flights from ${destinationFrom} to ${destinationTo} on ${date}`);
      setDestinationFrom('');
      setDestinationTo('');
      setDate('');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <section
      className="hero-section text-center text-dark py-5"
      style={{
        background: 'linear-gradient(180deg, #1E3A8A 0%, #3B82F6 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '500px', 
        display: 'flex', 
        alignItems: 'center', 
      }}
    >
      <div
        className="container d-flex flex-column align-items-center"
        style={{
          justifyContent: 'flex-end', 
          paddingBottom: '20px', 
          height: '100%', 
        }}
      >
        <h1
          className="display-4 fw-bold mb-3"
          style={{
            color: 'white',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 700,
          }}
        >
          Let’s explore & travel the world
        </h1>
        <p
          className="lead mb-4"
          style={{
            color: 'white',
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
          }}
        >
          Find the best destinations and the most popular stays!
        </p>
        <div
          className="bg-white p-4 rounded shadow"
          style={{
            maxWidth: '900px',
            width: '100%',
          }}
        >
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="text-start mb-0">SEARCH FLIGHTS</h3>
            <div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Return"
                  checked={tripType === 'Return'}
                  onChange={(e) => setTripType(e.target.value)}
                  id="return"
                />
                <label className="form-check-label" htmlFor="return">Return</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  value="One-way"
                  checked={tripType === 'One-way'}
                  onChange={(e) => setTripType(e.target.value)}
                  id="oneway"
                />
                <label className="form-check-label" htmlFor="oneway">One-way</label>
              </div>
            </div>
          </div>
          <form onSubmit={handleSearch} className="row g-3">
            <div className="col-md-3">
              <label
                className="form-label"
                style={{
                  fontSize: '0.875rem',
                  color: '#6C757D',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Departure
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Singapore (SIN)"
                value={destinationFrom}
                onChange={(e) => setDestinationFrom(e.target.value)}
                style={{
                  height: '50px',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div className="col-md-3">
              <label
                className="form-label"
                style={{
                  fontSize: '0.875rem',
                  color: '#6C757D',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Arrival
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Los Angeles (LA)"
                value={destinationTo}
                onChange={(e) => setDestinationTo(e.target.value)}
                style={{
                  height: '50px',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div className="col-md-3">
              <label
                className="form-label"
                style={{
                  fontSize: '0.875rem',
                  color: '#6C757D',
                  display: 'block',
                  marginBottom: '0.25rem',
                }}
              >
                Date
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="01/05/2022"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                style={{
                  height: '50px',
                  fontSize: '1rem',
                }}
              />
            </div>
            <div className="col-md-3 d-flex align-items-end">
              <button
                type="submit"
                className="btn w-100"
                style={{
                  height: '50px',
                  fontSize: '1rem',
                  backgroundColor: '#F5A623',
                  color: 'white',
                  border: 'none',
                }}
              >
                SEARCH FLIGHTS
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;