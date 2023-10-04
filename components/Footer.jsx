import React from 'react';

function Footer() {
  return (
    <footer className="text-blue text-center py-3">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>&copy; {new Date().getFullYear()} Benjamin Currier </p>
            <p>
              <a href="https://github.com/bennyleemn" className="text-blue" target="_blank" rel="noopener noreferrer">
                GitHub - What I've done.
              </a>
              {' | '}
              <a href="https://www.linkedin.com/in/ben-currier-2b51a31a/" className="text-blue" target="_blank" rel="noopener noreferrer">
                LinkedIn - Where I've been.
              </a>
              {' | '}
              <a href="https://open.spotify.com/user/1272074254?si=0Y0hctRmTz6QVJGQ7inJgg " className="text-blue" target="_blank" rel="noopener noreferrer">
                Spotify Profile - what I listen to!
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;