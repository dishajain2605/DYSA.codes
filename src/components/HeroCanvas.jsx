import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const pointsRef = useRef()

  const { positions, colors } = useMemo(() => {
    const count = 1800
    const positions = new Float32Array(count * 3)
    const colors    = new Float32Array(count * 3)

    const c1 = new THREE.Color('#00f5ff')
    const c2 = new THREE.Color('#8b5cf6')
    const c3 = new THREE.Color('#00ff88')

    for (let i = 0; i < count; i++) {
      // Spread across a large sphere
      const theta = Math.random() * Math.PI * 2
      const phi   = Math.acos(2 * Math.random() - 1)
      const r     = 3 + Math.random() * 12

      positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)

      // Assign colors randomly
      const pick = Math.random()
      const col  = pick < 0.55 ? c1 : pick < 0.8 ? c2 : c3
      colors[i * 3]     = col.r
      colors[i * 3 + 1] = col.g
      colors[i * 3 + 2] = col.b
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    pointsRef.current.rotation.y = t * 0.04
    pointsRef.current.rotation.x = t * 0.015
  })

  return (
    <Points ref={pointsRef} positions={positions} colors={colors} stride={3}>
      <PointMaterial
        transparent
        vertexColors
        size={0.045}
        sizeAttenuation
        depthWrite={false}
        opacity={0.75}
      />
    </Points>
  )
}

function RotatingCore() {
  const mesh1 = useRef()
  const mesh2 = useRef()
  const mesh3 = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    mesh1.current.rotation.x = t * 0.25
    mesh1.current.rotation.y = t * 0.35
    mesh1.current.position.y = Math.sin(t * 0.6) * 0.25

    mesh2.current.rotation.x = -t * 0.15
    mesh2.current.rotation.y =  t * 0.20
    mesh2.current.rotation.z =  t * 0.10

    mesh3.current.rotation.y = t * 0.45
    mesh3.current.rotation.z = t * 0.20
  })

  return (
    <>
      {/* Inner — cyan wireframe icosahedron */}
      <mesh ref={mesh1}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#00f5ff"
          emissive="#00f5ff"
          emissiveIntensity={0.35}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Middle — purple ghost icosahedron */}
      <mesh ref={mesh2} scale={1.35}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.15}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>

      {/* Outer ring — octahedron */}
      <mesh ref={mesh3} scale={1.8}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#00ff88"
          emissive="#00ff88"
          emissiveIntensity={0.08}
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>
    </>
  )
}

export default function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      style={{ background: 'transparent' }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]}   color="#00f5ff" intensity={4} />
      <pointLight position={[-5, -3, -5]} color="#8b5cf6" intensity={2.5} />
      <pointLight position={[0, -5, 3]}  color="#00ff88" intensity={1.5} />
      <ParticleField />
      <RotatingCore />
    </Canvas>
  )
}
