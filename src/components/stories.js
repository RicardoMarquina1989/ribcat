import { useState, useRef } from 'react'
import React from 'react'
import classNames from 'classnames'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger)

export function Stories() {
  const main = useRef()
  const [toggleStates, setToggleStates] = useState({
    low_weight: 0,
    flexible_size: 0,
    purposeful_layout: 0,
    without_emissions: 0,
    high_quality: 0
  })

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.story-image-inner img')
      boxes.forEach((box) => {
        gsap.to(box, {
          scale: 1.2,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: true,
            toggleActions: 'restart resume play reset'
            // onEnter: () => {
            //   console.log('on Enter', box)
            // },
            // onLeave: () => {
            //   console.log('onleave', box)
            // }
            // markers: true,
          }
        })
      })
    },
    { scope: main }
  )

  return (
    <section className="stories" id="story-wrapper">
      <div className="stories-pages" ref={main}>
        <div className="story">
          <div className="story-image">
            <div className="story-image-inner" style={{ transform: 'none' }}>
              <img
                alt="Ribcat from Yachtwerft Hamburg cruising, side view"
                sizes="90vw"
                srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-640.WEBP 640w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-750.WEBP 750w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-828.WEBP 828w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-1080.WEBP 1080w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-1200.WEBP 1200w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-1920.WEBP 1920w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-2048.WEBP 2048w"
                src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-45-opt-2048.WEBP"
                width="1600"
                height="1200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: 'transparent', visibility: 'visible' }}
              />
            </div>
          </div>
          <div className="story-content-frame">
            <div className="story-content">
              <div className="story-content-intro">
                <h3>Accessories</h3>
                <div className="story-content-intro-abstract">
                  <p>
                    Customize your Titan Tender with options to fit your lifestyle and needs.
                  </p>
                </div>
              </div>
              <div className="story-content-details">
                <div className={classNames('story-content-details-blocks', 'height-0', { expand: toggleStates.low_weight })}>
                  <li>Seating options
                    <ul>
                      <li>Standard horizonal flat bench.</li>
                      <li>Deluxe locking storage seat - A watertight spot for your VHF radio, flares, cell phone, headlamps med kit, or anything else you want to have on hand.</li>
                    </ul>
                  </li>
                  <li>Beach wheels
                    <ul>
                      <li>No more dragging your boat over sand and rocks. Our custom drop down beach wheels will have you rolling on to the beach with ease.</li>
                    </ul>
                  </li>
                  <li>Dual position water sports tow bar and engine guard
                    <ul>
                      <li>Add some thrill to your excursion with the ability to tow someone on a wakeboard, waterski or tube.</li>
                      <li>Optimal place for fishing rod holders.</li>
                      <li>Additional cleat tie location.</li>
                      <li>When lowered to horizontal position a great way to protect your engine while tied to docks or near other boats.</li>
                    </ul>
                  </li>
                  <li>Fishing Rod and Spear gun holder
                    <ul>
                      <li>Once you've caught dinner safely store your rod or speargun in the pontoons with our custom purpose built racks.</li>
                      <li>Optimal place for fishing rod holders.</li>
                    </ul>
                  </li>
                  <li>Scuba Tank Mount
                    <ul>
                      <li>Keep you tank secure and out of the center of the boat.</li>
                    </ul>
                  </li>
                  <li>Battery Holddown
                  </li>
                  <figure>
                    <noscript>
                      <img
                        alt=""
                        srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-1920.WEBP 2x"
                        src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-1920.WEBP"
                        width="700"
                        height="467"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                        style={{ color: 'transparent' }}
                      />
                    </noscript>
                    <img
                      alt=""
                      srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-1920.WEBP 2x"
                      src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-1920.WEBP"
                      width="700"
                      height="467"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{
                        color: 'transparent',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: 'url(https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-15-opt-10.WEBP)',
                        // filter: 'url(#sharpBlur)',
                        visibility: 'visible'
                      }}
                      data-xblocker="passed"
                    />
                    <svg
                      style={{
                        border: 0,
                        clip: 'rect(0 0 0 0)',
                        height: 0,
                        margin: -1,
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        width: 1
                      }}>
                      <filter id="sharpBlur">
                        <feGaussianBlur stdDeviation="20" colorInterpolationFilters="sRGB"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          colorInterpolationFilters="sRGB"
                          values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"></feColorMatrix>
                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                      </filter>
                    </svg>
                  </figure>
                </div>
              </div>
              <div className="story-content-ui">
                <button
                  className="story-content-toggle-button"
                  data-show-label="Read more"
                  data-close-label="Close"
                  onClick={() => {
                    setToggleStates({ ...toggleStates, low_weight: !toggleStates.low_weight })
                  }}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="19.3984" y1="8.30127" x2="19.3984" y2="28.3013" stroke="#8AB8D1"></line>
                    <line x1="8.79688" y1="17.8013" x2="28.7969" y2="17.8013" stroke="#8AB8D1"></line>
                    <circle cx="18.8984" cy="18.3013" r="17.5" stroke="#8AB8D1"></circle>
                  </svg>
                  <div className="story-content-toggle-button-label">Read more</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="story">
          <div className="story-image">
            <div className="story-image-inner" style={{ transform: 'none' }}>
              <img
                alt="Ribcat from Yachtwerft Hamburg YYachts cruising, top view"
                sizes="90vw"
                srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-640.WEBP 640w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-750.WEBP 750w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-828.WEBP 828w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-1080.WEBP 1080w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-1200.WEBP 1200w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-1920.WEBP 1920w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-2048.WEBP 2048w"
                src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-6-opt-2048.WEBP"
                width="1600"
                height="1200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: 'transparent', visibility: 'visible' }}
              />
            </div>
          </div>
          <div className="story-content-frame">
            <div className="story-content">
              <div className="story-content-intro">
                <h3>Purpose built and thoughtful design</h3>
                <div className="story-content-intro-abstract">
                  <p>From our retractable bow cleat to our rear pontoon steps, every detail of our tenders have been carefully designed and engineered with the cruiser in mind.</p>
                </div>
              </div>
              <div className="story-content-details">
                <div className={classNames('story-content-details-blocks', 'height-0', { expand: toggleStates.flexible_size })}>
                  <p>
                    Utility comes standard on every Titan Tender with the following options.
                  </p>
                  <li>Bow locker large enough for 6 gallon fuel tank</li>
                  <li>Retractable bow cleat</li>
                  <li>Oar locks </li>
                  <li>EVA foam rub rail</li>
                  <li>Aluminum Reinforced Transom</li>
                  <li>Double Floor with "bilge" access</li>
                  <li>4 dinghy davit lifting points</li>
                  <li>EVA decking</li>
                  <li>Corded lifting handles</li>
                  <li>Rear stepped pontoons make it easy for swimmers to climb aboard</li>
                  <li>Aluminum Keel Guard</li>
                  <li>Self Bailing Drain Plug</li>
                </div>
              </div>
              <div className="story-content-ui">
                <button
                  className="story-content-toggle-button"
                  data-show-label="Read more"
                  data-close-label="Close"
                  onClick={() => setToggleStates({ ...toggleStates, flexible_size: !toggleStates.flexible_size })}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="19.3984" y1="8.30127" x2="19.3984" y2="28.3013" stroke="#8AB8D1"></line>
                    <line x1="8.79688" y1="17.8013" x2="28.7969" y2="17.8013" stroke="#8AB8D1"></line>
                    <circle cx="18.8984" cy="18.3013" r="17.5" stroke="#8AB8D1"></circle>
                  </svg>
                  <div className="story-content-toggle-button-label">Read more</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="story">
          <div className="story-image">
            <div className="story-image-inner" style={{ transform: 'none' }}>
              <img
                alt="Close-up of people on Ribcat from Yachtwerft Hamburg"
                sizes="90vw"
                srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-640.WEBP 640w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-750.WEBP 750w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-828.WEBP 828w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-1080.WEBP 1080w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-1200.WEBP 1200w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-1920.WEBP 1920w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-2048.WEBP 2048w"
                src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-60-opt-2048.WEBP"
                width="1600"
                height="1200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: 'transparent', visibility: 'visible' }}
              />
            </div>
          </div>
          <div className="story-content-frame">
            <div className="story-content">
              <div className="story-content-intro">
                <h3>Purposeful layout</h3>
                <div className="story-content-intro-abstract">
                  <p>By placing the steering position in the front area of the Ribcat, the stern can be designed and used very flexibly.</p>
                </div>
              </div>
              <div className="story-content-details">
                <div className={classNames('story-content-details-blocks', 'height-0', { expand: toggleStates.purposeful_layout })}>
                  <p>
                    Every owner has slightly different requirements for his tender and therefore the Ribcat can be adapted exactly to the
                    needs of its user. Either two benches are installed in the stern to accommodate at least six people. However, the stern
                    can just as easily be adapted to customers who are enthusiastic about diving or fishing, or it can be designed purely as
                    a working boat.
                  </p>
                  <figure>
                    <noscript>
                      <img
                        alt=""
                        srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-1920.WEBP 2x"
                        src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-1920.WEBP"
                        width="700"
                        height="393"
                        decoding="async"
                        data-nimg="1"
                        loading="lazy"
                        style={{ color: 'transparent' }}
                      />
                    </noscript>
                    <img
                      alt=""
                      srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-1920.WEBP 2x"
                      src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-1920.WEBP"
                      width="700"
                      height="393"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{
                        color: 'transparent',
                        backgroundSize: 'cover',
                        backgroundPosition: '50% 50%',
                        backgroundRepeat: 'no-repeat',
                        backgroundImage: 'url(https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender_drone-3-opt-10.WEBP)',
                        // filter: 'url(#sharpBlur)',
                        visibility: 'visible'
                      }}
                    />
                    <svg
                      style={{
                        border: 0,
                        clip: 'rect(0 0 0 0)',
                        height: 0,
                        margin: -1,
                        overflow: 'hidden',
                        padding: 0,
                        position: 'absolute',
                        width: 1
                      }}>
                      <filter id="sharpBlur">
                        <feGaussianBlur stdDeviation="20" colorInterpolationFilters="sRGB"></feGaussianBlur>
                        <feColorMatrix
                          type="matrix"
                          colorInterpolationFilters="sRGB"
                          values="1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"></feColorMatrix>
                        <feComposite in2="SourceGraphic" operator="in"></feComposite>
                      </filter>
                    </svg>
                  </figure>
                </div>
              </div>
              <div className="story-content-ui">
                <button
                  className="story-content-toggle-button"
                  data-show-label="Read more"
                  data-close-label="Close"
                  onClick={() => setToggleStates({ ...toggleStates, purposeful_layout: !toggleStates.purposeful_layout })}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="19.3984" y1="8.30127" x2="19.3984" y2="28.3013" stroke="#8AB8D1"></line>
                    <line x1="8.79688" y1="17.8013" x2="28.7969" y2="17.8013" stroke="#8AB8D1"></line>
                    <circle cx="18.8984" cy="18.3013" r="17.5" stroke="#8AB8D1"></circle>
                  </svg>
                  <div className="story-content-toggle-button-label">Read more</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="story">
          <div className="story-image">
            <div className="story-image-inner" style={{ transform: 'none' }}>
              <img
                alt="People on Ribcat from Yachtwerft Hamburg"
                sizes="90vw"
                srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-640.WEBP 640w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-750.WEBP 750w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-828.WEBP 828w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-1080.WEBP 1080w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-1200.WEBP 1200w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-1920.WEBP 1920w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-2048.WEBP 2048w"
                src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-34-opt-2048.WEBP"
                width="1600"
                height="1200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: 'transparent', visibility: 'visible' }}
              />
            </div>
          </div>
          <div className="story-content-frame">
            <div className="story-content">
              <div className="story-content-intro">
                <h3>Without emissions</h3>
                <div className="story-content-intro-abstract">
                  <p>
                    Ribcat`s will be equipped with a fully electric drive to meet our sustainable mission. A good range and a short charging
                    time characterize the set-up.
                  </p>
                </div>
              </div>
              <div className="story-content-details">
                <div className={classNames('story-content-details-blocks', 'height-0', { expand: toggleStates.without_emissions })}>
                  <p>
                    With a 12-kilowatt electric outboard, the smaller Ribcat can travel up to 15 nautical miles non-stop at nine knots; the
                    larger Ribcat, with two 12-kilowatt drives, can travel 20 nautical miles at eight knots. This covers almost all possible
                    uses - no owner goes much further than these distances with his tender, even if the yacht and thus the dinghy are much
                    larger than the Ribcat.
                  </p>
                  <p>Of course, the Ribcat is also available with a conventional outboard drive.</p>
                  <figure>
                    <img
                      alt=""
                      srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-55-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-55-opt-1920.WEBP 2x"
                      src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-55-opt-1920.WEBP"
                      width="700"
                      height="467"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{ color: 'transparent', visibility: 'visible' }}
                    />
                  </figure>
                </div>
              </div>
              <div className="story-content-ui">
                <button
                  className="story-content-toggle-button"
                  data-show-label="Read more"
                  data-close-label="Close"
                  onClick={() => setToggleStates({ ...toggleStates, without_emissions: !toggleStates.without_emissions })}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="19.3984" y1="8.30127" x2="19.3984" y2="28.3013" stroke="#8AB8D1"></line>
                    <line x1="8.79688" y1="17.8013" x2="28.7969" y2="17.8013" stroke="#8AB8D1"></line>
                    <circle cx="18.8984" cy="18.3013" r="17.5" stroke="#8AB8D1"></circle>
                  </svg>
                  <div className="story-content-toggle-button-label">Read more</div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="story">
          <div className="story-image">
            <div className="story-image-inner" style={{ transform: 'none' }}>
              <img
                alt="Close-up of steering wheel on Ribcat from Yachtwerft Hamburg"
                sizes="90vw"
                srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-640.WEBP 640w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-750.WEBP 750w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-828.WEBP 828w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-1080.WEBP 1080w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-1200.WEBP 1200w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-1920.WEBP 1920w, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-2048.WEBP 2048w"
                src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-22-opt-2048.WEBP"
                width="1600"
                height="1200"
                decoding="async"
                data-nimg="1"
                loading="lazy"
                style={{ color: 'transparent', visibility: 'visible' }}
              />
            </div>
          </div>
          <div className="story-content-frame">
            <div className="story-content">
              <div className="story-content-intro">
                <h3>High quality</h3>
                <div className="story-content-intro-abstract">
                  <p>
                    The Ribcat is built in Germany, ensuring a high level of vertical integration. Our product is reduced to what is
                    necessary without restricting comfort.
                  </p>
                </div>
              </div>
              <div className="story-content-details">
                <div className={classNames('story-content-details-blocks', 'height-0', { expand: toggleStates.high_quality })}>
                  <figure>
                    <img
                      alt=""
                      srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-32-opt-750.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-32-opt-1920.WEBP 2x"
                      src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-32-opt-1920.WEBP"
                      width="700"
                      height="467"
                      decoding="async"
                      data-nimg="1"
                      loading="lazy"
                      style={{ color: 'transparent', visibility: 'visible' }}
                    />
                  </figure>
                  <p>
                    The fewer failure-prone components are installed on a boat or yacht, the fewer sources of error and the fewer days of
                    downtime there are. At the same time, the Ribcat`s are equipped in such a way that their owners do not miss any comfort.
                  </p>
                  <p>The construction of the Ribcat is also organized in a simple and straightforward manner.</p>
                </div>
              </div>
              <div className="story-content-ui">
                <button
                  className="story-content-toggle-button"
                  data-show-label="Read more"
                  data-close-label="Close"
                  onClick={() => setToggleStates({ ...toggleStates, high_quality: !toggleStates.high_quality })}>
                  <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="19.3984" y1="8.30127" x2="19.3984" y2="28.3013" stroke="#8AB8D1"></line>
                    <line x1="8.79688" y1="17.8013" x2="28.7969" y2="17.8013" stroke="#8AB8D1"></line>
                    <circle cx="18.8984" cy="18.3013" r="17.5" stroke="#8AB8D1"></circle>
                  </svg>
                  <div className="story-content-toggle-button-label">Read more</div>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
