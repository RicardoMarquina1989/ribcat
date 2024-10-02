import React, { useState, useRef, useEffect } from 'react'
import _ from 'lodash'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { useGSAP } from '@gsap/react'
import { Observer } from 'gsap/Observer'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer)

import { Preloader } from './components/preloader'
import { Header } from './components/header'
import { Stories } from './components/stories'
import { BoatsFacts } from './components/boatsfacts'
import { ScrollInfo } from './components/scroll-info'
import { YtenderLogo } from './components/ytender-logo'
import { Articles } from './components/articles'
import { SimpleLightbox } from './components/simple-lightbox'
import { Footer } from './components/footer'
import { ThreeWrapper } from './components/3d-wrapper'
import { ScrollIndicator } from './components/scroll-indicator'
import { ConfigureModal } from './components/configure-modal'

export function App() {
  let wheelObserver = null,
    touchObserver = null

  const [openModal, setOpenModal] = useState(false)
  const [openConfigureModal, setOpenConfigureModal] = useState(false)
  // configuireModal ref
  const stateRef = useRef()
  stateRef.current = openConfigureModal

  const PANEL_IDS = ['hero', 'feature1', 'feature2', 'feature3', 'feature4', 'feature5']
  // scroll position
  const [currentIndex, setCurrentIndex] = useState(0)

  const debouncedOnDown = _.debounce(() => {
    goToSectionByDirection('up')
  }, 300) // Adjust the debounce time (in milliseconds) as needed

  const debouncedOnUp = _.debounce(() => {
    goToSectionByDirection('down')
  }, 300) // Adjust the debounce time (in milliseconds) as needed

  useEffect(() => {
    if (openConfigureModal && !currentIndex) {
      goToSectionByDirection('down')
    }
  }, [openConfigureModal])

  const goToSectionByDirection = (dir) => {
    let diff = dir === 'down' ? 1 : -1

    setCurrentIndex((prevIndex) => {
      // only update
      if (prevIndex == 0 && diff == -1) return 0

      if (prevIndex == PANEL_IDS.length - 1 && diff == 1) {
        const _element = document.getElementById('story-wrapper')
        _element.scrollIntoView({ behavior: 'smooth' })
        return prevIndex + 1
      }

      const cIndex = prevIndex + diff
      if (cIndex > -1 && cIndex < PANEL_IDS.length) {
        const element = document.getElementById(PANEL_IDS[prevIndex + diff])
        element.scrollIntoView({ behavior: 'smooth' })
      }

      // if (prevIndex == PANEL_IDS.length) diff = 0

      return prevIndex + diff
    })

    return true
  }

  useGSAP(() => {
    // wheel
    wheelObserver = Observer.create({
      type: 'wheel',
      wheelSpeed: 0.1,
      scrollSpeed: 0.1,
      onDown: () => {
        goToSectionByDirection('down')
      },
      onUp: () => {
        goToSectionByDirection('up')
      },
      tolerance: 100,
      // wheelSpeed: ,
      // target: '#features-3d-wrapper',
      preventDefault: true
    })
    // wheel main observer: always observe
    Observer.create({
      type: 'wheel',
      onChangeY: (observer) => {
        if (stateRef.current) {
          wheelObserver && wheelObserver.disable()
        } else {
          const ele = document.getElementById('story-wrapper').getBoundingClientRect()
          if (observer.event.pageY < ele.top) {
            wheelObserver.enable()
            setCurrentIndex((prevIndex) => (prevIndex >= PANEL_IDS.length ? PANEL_IDS.length - 1 : prevIndex))
          } else {
            wheelObserver.disable()
          }
        }
      }
    })
    // touch
    touchObserver = Observer.create({
      type: 'touch,pointer',
      scrollSpeed: 0.25,
      onDown: () => {
        debouncedOnDown()
      },
      onUp: () => {
        debouncedOnUp()
      },
      tolerance: 100,
      wheelSpeed: -1,
      preventDefault: true
    })
    // touch main observer
    Observer.create({
      type: 'touch,pointer',
      onChangeY: (observer) => {
        if (stateRef.current) {
          touchObserver && touchObserver.disable()
        } else {
          if (observer.event.pageY === 0 && !observer.event.hasOwnProperty('changedTouches')) {
            touchObserver.disable()
            return
          }

          if (observer.event.target.id === 'features-3d-wrapper') {
            touchObserver.enable()
            setCurrentIndex((prevIndex) => (prevIndex >= PANEL_IDS.length ? PANEL_IDS.length - 1 : prevIndex))
          } else {
            touchObserver.disable()
          }
        }
      }
    })
  })

  return (
    <div className="app">
      <Preloader />
      <Header
        openModal={openModal}
        setOpenModal={setOpenModal}
        openConfigureModal={openConfigureModal}
        setOpenConfigureModal={setOpenConfigureModal}
      />
      <ThreeWrapper setCurrentIndex={setCurrentIndex} currentIndex={currentIndex} PANEL_IDS={PANEL_IDS} />
      <ScrollIndicator currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} PANEL_IDS={PANEL_IDS} />
      <Stories />
      <BoatsFacts />
      <ScrollInfo />
      <YtenderLogo currentIndex={currentIndex} />
      <Articles setOpenModal={setOpenModal} />
      <SimpleLightbox openModal={openModal} />
      <Footer />
      <ConfigureModal openConfigureModal={openConfigureModal} setOpenConfigureModal={setOpenConfigureModal} />
    </div>
  )
}
