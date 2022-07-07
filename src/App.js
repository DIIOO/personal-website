import './App.css';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei/core';
import RoomFloor from './3D-Components/RoomFloor';


function App() {
  return (
    <>
      <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <OrbitControls />
      <RoomFloor />
      </Canvas>
    </>
  );
}

export default App;
