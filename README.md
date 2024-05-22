# React Three Rapier - Physics


The Physics component in @react-three/rapier provides a powerful physics simulation environment for Three.js applications. It allows developers to introduce realistic physics behaviors to objects in their scenes. Here's a breakdown of its properties:


gravity: This property determines the direction and strength of gravitational force applied to objects within the physics simulation. 
It is represented as a 3D vector [x, y, z], where y typically represents the strength of the gravitational pull. In the provided example, 
[0, -9.8100, 0] specifies a downward gravitational force of approximately 9.81 units per second squared, simulating Earth-like gravity.


Inside the Physics component, objects are encapsulated within RigidBody components, which define the physical properties and behaviors of individual objects.


Here's how they are used within the PhysicsScene component:


<RigidBody>: This component wraps the mesh elements to enable physical simulation for those objects. The mesh elements enclosed within <RigidBody> will behave according to the laws of physics defined by the simulation environment.


type: This property of the RigidBody component determines the type of physical body the mesh represents. In the provided example, type="fixed" specifies that the enclosed mesh represents a fixed object, meaning it remains stationary and unaffected by forces applied to it within the simulation.


By combining the Physics and RigidBody components, developers can create dynamic and interactive 3D scenes with realistic physics behavior, enhancing the immersion and realism of their applications.
