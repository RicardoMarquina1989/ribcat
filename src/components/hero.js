import React from 'react'

export function Hero() {
  return (
    <section id="hero" className="hero-video">
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
              Titan Tenders were designed specifically to be the most stable, versatile and capable tender available anywhere in the world. 
              </p>
            </div>
          </h2>
        </div>
      </div>
    </section>
  )
}
