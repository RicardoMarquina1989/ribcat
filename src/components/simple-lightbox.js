import React from 'react'

export function SimpleLightbox({ openModal }) {
  return (
    <div className="simple-lightbox" data-projection-id="3" style={{ opacity: 1, display: openModal ? '' : 'none' }}>
      <div className="simple-lightbox__inner" data-projection-id="4" style={{ transform: 'translateY(0px) translateZ(0px)' }}>
        <div className="simple-lightbox__content">
          <div className="article">
            <header>
              <div className="page-header" data-theme="dark">
                <div className="page-header-content">
                  <h1>
                    <div className="page-header-content-title">How is a Ribcat equipped?</div>
                    <div className="page-header-content-divider"></div>
                  </h1>
                  <div className="ytender-logo undefined ">
                    <img src="/images/logo/white.png" />
                  </div>
                  <h2>
                    <div>
                      As owners of a Yacht are accustomed to, a Ribcat is also manufactured with the highest precision and from the best
                      materials.
                    </div>
                  </h2>
                </div>
              </div>
            </header>
            <main>
              <figure>
                <img
                  src="https://ribcat.de/images/photos/ribcat_tender-36_HD.webp"
                  data-xblocker="passed"
                  style={{ visibility: 'visible' }}
                />
              </figure>
              <p>
                The principle of using only tried and tested components applies to the Ribcat, to minimize the vulnerability of the
                technology and thus downtime.
              </p>
              <p>
                The hull and deck are built in composite: Polyester gelcoat (RAL9016) in combination with vinyl ester/glass laminate and
                recycled PET core sandwich. The Cockpit floor has a non-skit surface for safe usage. Lockers are installed under the side
                benches; the anchor locker can be found in the forward compartment.
              </p>
              <figure>
                <img
                  src="https://ribcat.de/images/photos/ribcat_tender-28_HD.webp"
                  data-xblocker="passed"
                  style={{ visibility: 'visible' }}
                />
              </figure>
              <p>
                Optional and recommended is a center console, which can be fitted with a Teleflex steering. The deck has 3 pad eyes. Two in
                the back and one in the front for lifting and mooring. The seating areas have removable stainless-steel backrests. Optional
                is a removable stainless-steel bimini in the aft area. In standard configuration, the boat has a 4 kg foldable anchor and a
                12m anchor line.
              </p>
              <figure>
                <img
                  src="https://ribcat.de/images/photos/ribcat_tender-18_HD.webp"
                  data-xblocker="passed"
                  style={{ visibility: 'visible' }}
                />
              </figure>
              <p>
                In terms of propulsion, the Ribcat 3.6 will be fitted with a 12 kW Cruise 12 RL Torque Link outboard engine. This drive will
                be powered by 10 kW 48V commercial batteries from Torqueedo, equipped with a 2900W fast charger. The Ribcat4.3 can be fitted
                with a twin electric engine. This drive will be powered by 48V commercial batteries, equipped with fast chargers. The Ribcat
                4.3 can be also fitted with a 25-kW electric outboard or a 50HP combustion engine.
              </p>
              <figure>
                <img
                  src="https://ribcat.de/images/photos/ribcat_tender_drone-12_HD.webp"
                  data-xblocker="passed"
                  style={{ visibility: 'visible' }}
                />
              </figure>
              <p>
                Self-evidently, the components can be selected in many different colors. With the possibility of customizing the upholstery,
                deck, steering wheel, cool box, bimini and ultimately the hull to suit personal taste or the look of the mother ship, the
                custom idea is just as pronounced in the Ribcat as it is in its mother ship.
              </p>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
