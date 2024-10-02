import React from 'react'

export function Articles({ setOpenModal }) {
  return (
    <section className="articles">
      <h3>Learn more</h3>
      <div className="article-teasers">
        <div className="article-teasers-scrollbox">
          <ul>
            <li onClick={() => setOpenModal(true)}>
              <div className="articles-article-teaser">
                <div className="article-teaser-image">
                  <img
                    alt=""
                    srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-3-opt-384.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-3-opt-640.WEBP 2x"
                    src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-3-opt-640.WEBP"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: 'transparent', visibility: 'visible' }}
                  />
                </div>
                <div className="article-teaser-copy">
                  <h4 className="article-teaser-title">Why do I need a Ribcat?</h4>
                  <div className="article-teaser-desc">
                    When a large yacht is anchored, you can of course stay on board and enjoy the tranquility of the bay.
                  </div>
                </div>
              </div>
            </li>
            <li onClick={() => setOpenModal(true)}>
              <div className="articles-article-teaser">
                <div className="article-teaser-image">
                  <img
                    alt=""
                    srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-63-opt-384.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-63-opt-640.WEBP 2x"
                    src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-63-opt-640.WEBP"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: 'transparent', visibility: 'visible' }}
                  />
                </div>
                <div className="article-teaser-copy">
                  <h4 className="article-teaser-title">Who is behind Ribcat?</h4>
                  <div className="article-teaser-desc">
                    YYachts from Greifswald in cooperation with Yachtwerft Hamburg has developed the tender with its design and engineering
                    expertise.
                  </div>
                </div>
              </div>
            </li>
            <li onClick={() => setOpenModal(true)}>
              <div className="articles-article-teaser">
                <div className="article-teaser-image">
                  <img
                    alt=""
                    srcSet="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-36-opt-384.WEBP 1x, https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-36-opt-640.WEBP 2x"
                    src="https://ribcat.de/images/photos/nextImageExportOptimizer/ribcat_tender-36-opt-640.WEBP"
                    width="300"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    loading="lazy"
                    style={{ color: 'transparent', visibility: 'visible' }}
                  />
                </div>
                <div className="article-teaser-copy">
                  <h4 className="article-teaser-title">How is a Ribcat equipped?</h4>
                  <div className="article-teaser-desc">
                    As owners of a Yacht are accustomed to, a Ribcat is also manufactured with the highest precision and from the best
                    materials.
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
