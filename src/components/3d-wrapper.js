import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import { BoatRenderer } from './BoatRenderer'
import { Feature3dWrapper } from './feature-3d-wrapper'

export const ThreeWrapper = ({ currentIndex, setCurrentIndex, PANEL_IDS }) => {
  return (
    <Canvas
      camera={{
        fov: 64
        // position: [2.3, 1.5, 2.3],
      }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Environment
        files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/blue_photo_studio_1k.hdr"
        resolution={512}
        blur={0.2}></Environment>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ScrollControls pages={6} damping={0.25}>
        <Feature3dWrapper currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} PANEL_IDS={PANEL_IDS} />
        <BoatRenderer currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} PANEL_IDS={PANEL_IDS} />
      </ScrollControls>
    </Canvas>
  )
}
