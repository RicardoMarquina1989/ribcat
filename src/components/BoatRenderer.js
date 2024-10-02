import { useState } from 'react'
import { Html, useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { Observer } from 'gsap/Observer'
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer)

export const FLOOR_HEIGHT = 2.3
export const NB_FLOORS = 3

// store current animation timeline
let currentAnimationTimeline

export function BoatRenderer(props) {
  const [isPortrait, setIsPortrait] = useState(window.innerWidth < window.innerHeight)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent)

  const model = useGLTF('./model/boat_O.glb')
  const ref = useRef()
  const tl = useRef()

  const { currentIndex } = props

  const handleOrientationChange = () => {
    setIsPortrait(window.innerWidth < window.innerHeight)
  }

  useEffect(() => {
    // Initial setup
    handleOrientationChange()

    // Event listener for orientation change
    window.addEventListener('resize', handleOrientationChange)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleOrientationChange)
    }
  }, [])

  useEffect(() => {
    if (currentAnimationTimeline) {
      currentAnimationTimeline.kill()
    }

    const animationTimeline = gsap.timeline()

    switch (currentIndex * 1) {
      case 1:
        if (isMobile && isPortrait) {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 1.3,
              y: -0.5,
              z: -2
            })
            .to(ref.current.rotation, {
              duration: 1,
              x: 0.2,
              y: Math.PI + 0.5,
              z: -0.25
            })
        } else {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 3,
              y: 0.5,
              z: 1.5
            })
            .to(ref.current.rotation, {
              duration: 1,
              x: 0.2,
              y: Math.PI + 0.5,
              z: -0.45
            })
        }

        break
      case 2:
        if (isMobile && isPortrait) {
          animationTimeline
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0,
              y: 0,
              z: 0,
              ease: 'power2.in'
            })
            .to(ref.current.position, {
              duration: 0.5,
              x: -1.5,
              y: -1.5,
              z: -1,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.5,
              x: 0.5,
              y: 0,
              ease: 'power2.in'
            })
        } else {
          animationTimeline
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0,
              y: 0,
              z: 0,
              ease: 'power2.in'
            })
            .to(ref.current.position, {
              duration: 0.5,
              x: 0,
              y: -0.5,
              z: 1,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.5,
              x: 0.5,
              y: 0,
              ease: 'power2.in'
            })
        }
        break
      case 3:
        if (isMobile && isPortrait) {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 0,
              y: 0,
              z: 0,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0,
              y: Math.PI / 2,
              z: 0.1,
              ease: 'power2.in'
            })
            .to(ref.current.position, {
              duration: 0.4,
              x: 0,
              y: -0.5,
              z: 1,
              ease: 'power2.in'
            })
        } else {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 1,
              y: -2,
              z: 1,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0,
              y: Math.PI / 2,
              z: 0.1,
              ease: 'power2.in'
            })
            .to(ref.current.position, {
              duration: 0.4,
              x: 0.5,
              y: -0.5,
              z: 3,
              ease: 'power2.in'
            })
        }
        break
      case 4:
        if (isMobile && isPortrait) {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 1.2,
              y: -0.5,
              z: -0.8,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.5,
              x: 0.5,
              // y: Math.PI / 2,
              y: 2.7,
              z: 0,
              ease: 'power2.in'
            })
        } else {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.3,
              x: 2.4,
              y: -1,
              z: 1.6,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.5,
              x: 0.4,
              // y: Math.PI / 2,
              y: 2.7,
              z: 0,
              ease: 'power2.in'
            })
        }

        break
      case 5:
        if (isMobile && isPortrait) {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.5,
              x: 0,
              y: 0,
              z: -1,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0.4,
              y: -Math.PI / 2,
              z: -0.1,
              ease: 'power2.in'
            })
            .to(ref.current.position, {
              duration: 0.5,
              x: 0,
              y: 0,
              z: -0.5,
              ease: 'power2.in'
            })
        } else {
          animationTimeline
            .to(ref.current.position, {
              duration: 0.5,
              x: 0.8,
              y: 1,
              z: 1,
              ease: 'power2.in'
            })
            .to(ref.current.rotation, {
              duration: 0.3,
              x: 0.4,
              y: -Math.PI / 2,
              z: -0.1,
              ease: 'power2.in'
            })
        }

        break
      default:
        animationTimeline.to(ref.current.position, {
          duration: 0.3,
          x: 100,
          y: -1,
          z: -1,
          ease: 'power2.in'
        })
        break
    }
    // Store the current animation timeline
    currentAnimationTimeline = animationTimeline
  }, [currentIndex])

  return (
    <>
      <group {...props} dispose={null} ref={ref} position={[-100, -1, -1]} rotation={[0, -Math.PI / 3, 0]}>
        <Html occlude="blending"></Html>
        <primitive ref={tl} object={model.scene} />
      </group>
    </>
  )
}

useGLTF.preload('./model/boat_O.glb')
