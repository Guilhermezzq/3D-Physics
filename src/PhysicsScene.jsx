// https://pmndrs.github.io/react-three-rapier/

// React three rapier é uma das bibliotecas que pode ser usada para simular física na web, e pode ser usado para simular física em objetos 2D ou 3D, que é o que vamos aprender nesse curso.

// npm install @react-three/rapier@0.9

import { Physics, RigidBody } from "@react-three/rapier";


const PhysicsScene = () => {



  return (

  
    // Então envolvemos essas duas malhas com o componente físico.
    <Physics
    gravity={[0, -9.8100, 0]} // faz com que objeto se mova para a direção determina 

    >
      <RigidBody> {/* // E isso fará com que o cubo comece a cair assim */}
      <mesh castShadow position={[0, 1.5, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="#c5ff86" />
      </mesh>

      <mesh 
      castShadow 
      position={[0, 1.5, 0]}
      scale={[0.25, 4, 1]}
      position-z={-2}
      >
       
        <boxGeometry />
        <meshStandardMaterial color="#c5ff86" />
      </mesh>
      </RigidBody>

      <RigidBody
      type="fixed" // Alterar o valor para fixo , o pisa ficará fixo
      
      >
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} receiveShadow>
        <boxGeometry args={[8, 8, 0.35]} />
        <meshStandardMaterial color="#f8ffff" />
      </mesh>
      </RigidBody>
      
    </Physics>
  );
};

export default PhysicsScene;
