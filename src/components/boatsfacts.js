import React from 'react'

export function BoatsFacts() {
  return (
    <section className="boatsfacts">
      <div className="boatsfacts-images">
        <div className="boatfacts-image">
          <img src="https://ribcat.de/images/drawings/ribcat_3_6.png" alt="" data-xblocker="passed" style={{ visibility: 'visible' }} />
        </div>
      </div>
      <div className="boatsfacts-pages">
        <nav className="boatsfacts-pages-nav">
          <a data-active="true">
            Ribcat 3.6
            <br />
            Speicifications
          </a>
          <a data-active="false">
            Ribcat 4.3
            <br />
            Speicifications
          </a>
        </nav>
        <div className="boatsfacts-pages-content">
          <div className="boatsfacts-page">
            <div className="boatsfacts-page-column">
              <div className="boatsfacts-page-column-entry">
                <h4>Length</h4>
                <p>3.65m / 3.30m (deflated tubes)</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Width</h4>
                <p>1.80m / 1.55m (deflated tubes)</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Draught</h4>
                <p>0.27m</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Weight</h4>
                <p>230 kg (without engine)</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Price</h4>
                <p>from 42.000 €</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Details</h4>
                <p>
                  Sea-deck
                  <br />
                  Navigation lights
                  <br />
                  Stainless steel rack &amp; Cooling bag
                </p>
              </div>
            </div>
            <div className="boatsfacts-page-column">
              <div className="boatsfacts-page-column-entry">
                <h4>CE-Category</h4>
                <p>C</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Power</h4>
                <p>1 or 2 x 12 KW (e-drive)</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Steering</h4>
                <p>hydraulic steering</p>
              </div>
              <div className="boatsfacts-page-column-entry">
                <h4>Options</h4>
                <p>Custom Upholstery</p>
              </div>
            </div>
            <div className="boatsfacts-page-download">
              <a href="/documents/RC_SPEC3.6_A1A.pdf" target="_blank" rel="noreferrer" download="download">
                Download specifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
