import React, { useState } from 'react';
import SubscribeBackground from '../assets/Subscribe section background.png';

function Newsletter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      className="newsletter py-5 text-center"
      style={{
        backgroundImage: `url(${SubscribeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '300px',
      }}
    >
      <div className="container">
        <h2
          className="mb-2"
          style={{
            width: '509px',
            height: '21px',
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '18px',
            lineHeight: '21px',
            textAlign: 'center',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            color: '#1262AE',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          SUBSCRIBE TO OUR NEWSLETTER
        </h2>
        <p
          className="mb-4"
          style={{
            width: '509px',
            height: '35px',
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '30px',
            lineHeight: '35px',
            textAlign: 'center',
            color: '#434343',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Get weekly updates
        </p>
        {submitted ? (
          <p className="text-success">Thank you for subscribing!</p>
        ) : (
          <div className="bg-white p-4 rounded shadow mx-auto" style={{ maxWidth: '550px' }}>
            <p
              className="text-muted mb-3"
              style={{ fontSize: '1rem', textAlign: 'left' }}
            >
              Fill in your details to join the party!
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{ height: '50px', fontSize: '1rem' }}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ height: '50px', fontSize: '1rem' }}
                />
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  backgroundColor: '#F5A623',
                  color: '#fff',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  height: '50px',
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;