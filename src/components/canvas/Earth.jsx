import React from 'react'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

import { OrbitControls, Preload ,useGLTF } from '@react-three/drei'



const Earth = () => {
  return (
    <div>Earth</div>
  )
}
<canvas>


</canvas>

const EarthCanvas = () => {
  return (
<canvas
shadows 
frameloop = 'demand'
gl={{preserveDrawingBuffer: true}}
camera = {{}}
>
<Suspense fallback={<CanvasLoader />}>
  <OrbitControls 
  autoRotate 
  enableZoom={false}
  maxPolarAngle={Math.PI /2}
  minPolarAngle={Math.PI /2}

  />


</Suspense>
</canvas>
  )
}


export default Earth