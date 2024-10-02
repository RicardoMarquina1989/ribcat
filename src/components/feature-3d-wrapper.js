import { Scroll } from '@react-three/drei'

export const Feature3dWrapper = () => {
  return (
    <Scroll html>
      <section className="features-3d-wrapper" id="features-3d-wrapper" style={{ touchAction: 'auto !important' }}>
        <section id="hero" className="hero-video features-3d">
          <div className="hero-video__vimeo" data-vimeo-initialized="true">
            <iframe
              src="https://player.vimeo.com/video/792138962?speed=0&amp;muted=1&amp;autoplay=1&amp;pip=0&amp;loop=1&amp;background=1&amp;quality=undefined&amp;app_id=122963&amp;texttrack=undefined"
              width="100"
              height="100"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              title="YTender+Intro+Clip"
              data-ready="true"></iframe>
          </div>
          <div className="hero-video__gradient"></div>
          <div className="page-header">
            <div className="page-header-content">
              <h1>
                <div className="page-header-content-title">
                  <div className="page-header-content-title">
                    <p>
                      WELCOME TO THE NEXT EVOLUTION OF CARBON FIBER TENDERS
                      <br />
                      <br />
                      INTRODUCING TITAN TENDERS
                    </p>
                  </div>
                </div>
              </h1>
              <h2>
                <div>
                  <p>
                    Titan Tenders were designed specifically to be the most stable, versatile and capable tender available anywhere in the
                    world.
                  </p>
                </div>
              </h2>
            </div>
          </div>
        </section>
        <section id="feature1" className="features-3d">
          <div className="features-3d__container">
            <div className="features-3d__container-inner">
              <h1>
                BUILT TO
                <br />
                CRUISE
              </h1>
              <p>
                Purposefully designed for full day excursions. Our tenders are built with a deep-V hull, 27 degree deadrise, and a plumb bow
                that slices through chop with ease. Each Titan Tender is designed for a dry and stable ride even when mother nature decides
                not to play nice.{' '}
              </p>
            </div>
          </div>
          <h1 className="huge-h1">Good</h1>
        </section>
        <section id="feature2" className="features-3d">
          <div className="features-3d__container">
            <div className="features-3d__container-inner">
              <h1>
                UNMATCHED
                <br />
                STABILITY
              </h1>
              <p>
                We believe tipping is only meant for good service... Our wide beam and generously sized pontoons are not only intended to
                provide ample seating but more importantly designed to give you confidence when stepping on and off the boat.
              </p>
            </div>
          </div>
          <h1 className="huge-h1">Flexible</h1>
        </section>
        <section id="feature3" className="features-3d features-3d--align-bottom">
          <div className="features-3d__container">
            <div className="features-3d__container-inner">
              <h1>
                UTILITY
                <br />
                REDEFINED
              </h1>
              <p>
                Our open pontoon design provides an incredible opportunity for storage and organization. Gone are the days of your dinghy
                floor looking like a yard sale got hit by a tornado. Every Titan Tender comes standard with removable mesh storage totes for
                all your gear, neatly suspended under the pontoon seats.
              </p>
            </div>
          </div>
          <h1 className="huge-h1">Smart</h1>
        </section>
        <section id="feature4" className="features-3d">
          <div className="features-3d__container">
            <div className="features-3d__container-inner">
              <h1>
                UPGRADES
                <br />
                MADE STANDARD
              </h1>
              <p>
                We believe you should not have to add costly upgrades in order to have an incredible tender. Titan Tenders come standard
                with double floor, bow locker, grab handles, reinforced davit lifting points, retractable cleat, and premium EVA decking
                throughout.
              </p>
            </div>
          </div>
          <h1 className="huge-h1">Stable</h1>
        </section>
        <section id="feature5" className="features-3d features-3d--align-bottom">
          <div className="features-3d__container">
            <div className="features-3d__container-inner">
              <h1>
                STORM
                <br />
                THE BEACH IN STYLE
              </h1>
              <p>
                With the standard 300 tender weighing 135lb you won't need an army to pull your Titan Tender onto the beach. With our
                optional custom beach wheels we've made beach landings even easier.
              </p>
            </div>
          </div>
          <h1 className="huge-h1">Easy</h1>
        </section>
      </section>
    </Scroll>
  )
}
