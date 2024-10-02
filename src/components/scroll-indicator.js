import React from 'react'

export function ScrollIndicator({ currentIndex, setCurrentIndex, PANEL_IDS }) {
  function goToSection(index) {
    if (-1 < index && index < PANEL_IDS.length) {
      // go to position by scroll

      const element = document.getElementById(PANEL_IDS[index])
      element.scrollIntoView({ behavior: 'smooth' })
      setCurrentIndex(index)
    }
  }

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const _cindex = prevIndex < PANEL_IDS.length - 1 ? prevIndex + 1 : prevIndex
      goToSection(_cindex)
      return _cindex
    })
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const _cindex = prevIndex > 0 ? prevIndex - 1 : 0
      goToSection(_cindex)
      return _cindex
    })
  }

  return (
    <section id="configurator" className="configuration" style={{ pointerEvents: 'none' }}>
      <div className="configuration__canvas-wrapper" style={{ position: 'relative' }}>
        <div className="slide-indicator">
          {currentIndex != 0 && currentIndex < PANEL_IDS.length && (
            <>
              <div className="slide-indicator__arrow slide-indicator__arrow--prev" onClick={prev}></div>
              {PANEL_IDS.map((item, index) => {
                return (
                  <button
                    className="slide-indicator__bullet"
                    key={item}
                    style={{ height: index == currentIndex ? 24 : 14 }}
                    onClick={() => goToSection(index)}>
                    <div
                      className="slide-indicator__bullet-inner"
                      style={{ backgroundColor: index === currentIndex ? '#415866' : '#a1b4c0' }}></div>
                  </button>
                )
              })}
              <div className="slide-indicator__arrow slide-indicator__arrow--next" onClick={next}></div>
            </>
          )}
          {/* <button className="slide-indicator__bullet" style={{ height: 14 }} onClick={() => goToSection(1)}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button>
          <button className="slide-indicator__bullet" style={{ height: 14 }} onClick={() => goToSection(2)}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button>
          <button className="slide-indicator__bullet" style={{ height: 14 }} onClick={() => goToSection(3)}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button>
          <button className="slide-indicator__bullet" style={{ height: 14 }} onClick={() => goToSection(4)}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button>
          <button className="slide-indicator__bullet" style={{ height: 14 }} onClick={() => goToSection(5)}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button> */}
          {/* <button className="slide-indicator__bullet" style={{ height: 14 }}>
            <div className="slide-indicator__bullet-inner" style={{ backgroundColor: '#a1b4c0' }}></div>
          </button> */}
        </div>
      </div>
    </section>
  )
}
