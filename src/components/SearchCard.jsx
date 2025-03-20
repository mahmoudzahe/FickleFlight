import React from 'react';

function SearchCard({ from, to, date }) {
  return (
    <div className="d-flex align-items-center">
      <span className="me-2">✈️</span>
      <p className="m-0">
        {from} → {to} <br /> Depart On: {date}
      </p>
    </div>
  );
}

export default SearchCard;