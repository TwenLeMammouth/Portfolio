import React, { Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import ThreeGlobe from 'three-globe';

import CanvasLoader from './Loader'
import THREE from 'three';
import { Experience, Location, Trip } from 'typings';

type Props = {
  experiences: Experience[];
  locations: Location[];
  trips: Trip[];
}

export function Earth({experiences, locations, trips}: Props) {
  
  const pData = locations?.map((location) => ({
    lat: location.isNorthHemisphere ? location.lat : -location.lat ,
    lng: location.isEastSide ? location.long : -location.long ,
    color: '#12DD88',
    name: location.city,
    position: location.city == 'Clermont-Ferrand' || location.city == 'Brisbane' ? 'top' : 'bottom',
  }));

  const aData = trips.map((trip) => ({
    startLat: trip.from.isNorthHemisphere ? trip.from.lat : -trip.from.lat,
    startLng: trip.from.isEastSide ? trip.from.long : -trip.from.long,
    endLat: trip.to.isNorthHemisphere ? trip.to.lat : -trip.to.lat,
    endLng: trip.to.isEastSide ? trip.to.long : -trip.to.long,
    color: '#12DD88',  
  }))

  const globe = new ThreeGlobe()
  .atmosphereColor('#AFE')
  .showGraticules(true)
  .globeImageUrl('./earthWpin/earth-dark.jpg')
  .bumpImageUrl('./earthWpin/earth-topology.png')
  .pointsData(pData)
  .pointAltitude(0.01)
  .pointRadius(0.08)
  .pointResolution(80)
  .pointColor('color')
  .pointsMerge(true)
  .labelsData(pData)
  .labelText('name')
  .labelSize(1)
  .labelDotRadius(0.2)
  .labelDotOrientation('position')
  .arcsData(aData)
  .arcColor('color')
  .arcDashLength(0.8)
  .arcDashGap(0.2)
  .arcDashAnimateTime(3500)
  

  // const globeMaterial = globe.globeMaterial();
  //   globeMaterial.bumpScale = 10;
  //   new THREE.TextureLoader().load('//unpkg.com/three-globe/example/img/earth-water.png', texture => {
  //     globeMaterial.specularMap = texture;
  //     globeMaterial.specular = new THREE.Color('grey');
  //     globeMaterial.shininess = 15;
  //   });


  setTimeout(() => {
    globe.pointsData(pData);
  }, 2000);

  return (
    <mesh>
      <hemisphereLight intensity={0.6} groundColor="gray" />
      {/* <pointLight intensity={2} /> */}
      <primitive
        object={globe}
        waitForGlobeReady
        scale={0.035}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

export default function EarthCanvas({experiences, locations, trips}: Props) {
  // console.log(experiences[0].location)
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true }} 
      >
        <Suspense 
        fallback={<CanvasLoader />}
        >
          <OrbitControls 
            autoRotate
            autoRotateSpeed={0.05}
            enableZoom={false} 
            />
          <Earth experiences={ experiences } locations={ locations } trips={ trips } />
        </Suspense>
        <Preload all />
    </Canvas>
  )
}