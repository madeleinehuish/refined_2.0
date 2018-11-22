import { Link } from 'react-router-dom';
import React from 'react';

const Guides = () =>{

    return (
      <section id="guides">
        <div id="guide-list">
          <div id="guides-header" className="row">
            <h1>STYLE GUIDES</h1>
          </div>
          <div className="row">
            <div id="beard-guides" className="six columns">
              <Link to="/beard-guides"><h5>BEARDS</h5></Link>
              <Link to="/beard-guides"><img src="images/beard.png" /></Link>
            </div>
            <div id="stache-guides" className="six columns">
              <Link to="/stache-guides"><h5>STACHES</h5></Link>
              <Link to="/stache-guides"><img src="images/logo_black.png" /></Link>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Guides;
