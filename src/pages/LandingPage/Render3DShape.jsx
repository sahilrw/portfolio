import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Render3DShape = ({
  className,
  followMouse = false,
  animateOnScroll = true,
  shape = 'cube',
  color = '#ffffff'
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    const fov = 90 / 2;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 8;

    const scene = new THREE.Scene();

    let geometry;

    switch (shape) {
      case 'pyramid':
        geometry = new THREE.ConeGeometry(1.5, 4, 8);
        break;
      case 'cube':
        geometry = new THREE.BoxGeometry(2, 2, 2);
        break;
      case 'torus':
        geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
        break;
      case 'sphere':
        geometry = new THREE.SphereGeometry(2, 24, 24);
        camera.position.z = 10;
        break;
      case 'dodecahedron':
        geometry = new THREE.DodecahedronGeometry(2);
        break;
      case 'icosahedron':
        geometry = new THREE.IcosahedronGeometry(2);
        break;
      case 'octahedron':
        geometry = new THREE.OctahedronGeometry(2);
        break;
      case 'tetrahedron':
        geometry = new THREE.TetrahedronGeometry(2);
        break;
      case 'tube':
        var curve = new THREE.CatmullRomCurve3([
          new THREE.Vector3(-2, -2, -2),
          new THREE.Vector3(-2, 2, -2),
          new THREE.Vector3(2, 2, -2),
          new THREE.Vector3(2, -2, -2),
          new THREE.Vector3(-2, -2, -2)
        ]);
        geometry = new THREE.TubeGeometry(curve, 20, 0.5, 8, false);
        break;
      case 'torusknot':
        geometry = new THREE.TorusKnotGeometry(1.5, 0.5, 100, 16);
        break;
      default:
        geometry = new THREE.ConeGeometry(2, 4, 8);
        break;
    }

    const material = new THREE.MeshBasicMaterial({ color, wireframe: true });
    const object = new THREE.Mesh(geometry, material);
    scene.add(object);

    const resizeRendererToDisplaySize = (renderer) => {
      const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
      return needResize;
    };

    const renderScene = () => {
      renderer.render(scene, camera); // Render scene after rotating
    };

    const onScroll = (event) => {
      //   Calculate rotation based on the mouse position
      object.rotation.x += 0.035;
      object.rotation.y += 0.015;
      object.rotation.z += 0.0025;
      renderScene();
    };

    const onMouseMove = (event) => {
      object.rotation.x = event.clientY * 0.0025;
      object.rotation.z = event.clientX * 0.0025;
      object.rotation.y = event.clientX * 0.0025;
      renderScene();
    };

    // Currently disabled. Remember to uncomment the event listener adder and remover if you want to use this.
    // just ctrl + f "onKeyDown" to find the relevant code
    // const onKeyDown = (event) => {
    //   event.preventDefault();
    //   switch (event.key) {
    //     case 'ArrowUp':
    //       object.rotation.x -= 0.05;
    //       break;
    //     case 'ArrowDown':
    //       object.rotation.x += 0.05;
    //       break;
    //     case 'ArrowLeft':
    //       object.rotation.y -= 0.05;
    //       break;
    //     case 'ArrowRight':
    //       object.rotation.y += 0.05;
    //       break;
    //     default:
    //       break;
    //   }
    //   renderScene();
    // };

    if (animateOnScroll) {
      window.addEventListener('scroll', onScroll);
      window.addEventListener('wheel', onScroll);
    }

    if (followMouse) {
      window.addEventListener('mousemove', onMouseMove);
    }
    // window.addEventListener('keydown', onKeyDown);

    const animate = () => {
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      requestAnimationFrame(animate);
    };
    animate();
    renderScene();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('wheel', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      // window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <div className={`pt-32 bg-black ${className}`}>
      <canvas ref={canvasRef} style={{ width: '98vw', height: '80vh', zIndex: '0' }} />
    </div>
  );
};

export default Render3DShape;
