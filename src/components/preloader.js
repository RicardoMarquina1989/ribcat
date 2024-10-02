import React from 'react'

export function Preloader() {
  return (
    <section className="preloader-home" id="preloader" style={{ backgroundColor: 'rgb(53, 53, 53)' }}>
      <div className="preloader-home-logo">
        <div className="ytender-logo">
          <img src="/images/logo/white.png" />
        </div>
      </div>
      <div className="preloader-home-progress">
        <div className="preloader-home-progress-info" data-template="Your experience is preparing ... {{PROGRESS}}%">
          Your experience is preparing ...
        </div>
      </div>
      <ul className="preloader-home-statements" data-last-statement="Welcome to Ribcat">
        <li>
          <div>
            <h2>Lightest tender in its class</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Emission-free thanks to e-drive</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Very efficient catamaran design</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Stable at high speed</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Compact size, low height</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Flexible layout, individual equipment</h2>
          </div>
        </li>
        <li>
          <div>
            <h2>Highest quality, made in Germany</h2>
          </div>
        </li>
      </ul>
    </section>
  )
}
