import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, MeshTransmissionMaterial, ContactShadows, Environment, OrbitControls, GizmoHelper, GizmoViewport, GizmoViewcube } from '@react-three/drei'
import { ModelRender } from './modelPart'

export function Configurator(props) {
  return (
    <Canvas camera={{ position: [0, 5, 4], fov: 40 }}>
      <ambientLight intensity={0.7} />
      <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, -5]} castShadow />
      <Environment preset="city" />
      <ContactShadows resolution={512} position={[0, -0.32, 0]} opacity={1} scale={10} blur={2} far={0.8} />
      <ambientLight intensity={1} />
      <ModelRender {...props} />
      <OrbitControls makeDefault enableZoom={true} enablePan={false} enableRotate={true} />
      <GizmoHelper
        alignment="top-right" // widget alignment within scene
        margin={[80, 80]} // widget margins (X, Y)
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="white" />
        {/* <GizmoViewcube /> */}
      </GizmoHelper>
    </Canvas>
  )
}