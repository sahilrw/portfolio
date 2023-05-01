import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const PyramidAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });

    const fov = 90;
    const aspect = canvas.clientWidth / canvas.clientHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 6;

    const scene = new THREE.Scene();

    const geometry = new THREE.ConeGeometry(2, 4, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const pyramid = new THREE.Mesh(geometry, material);
    scene.add(pyramid);

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

    const onScroll = (event) => {
      if (event.deltaY > 0) {
        // If deltaY is positive, user is scrolling down
        pyramid.rotation.x += 0.065;
        pyramid.rotation.y += 0.025;
        pyramid.rotation.z += 0.005;
        renderer.render(scene, camera); // Render scene after rotating
      }
    };

    canvas.addEventListener('wheel', onScroll);

    const animate = () => {
      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      requestAnimationFrame(animate);
    };
    animate();
    renderer.render(scene, camera); // Render scene after rotating

    // Cleanup function to remove event listener
    return () => {
      canvas.removeEventListener('wheel', onScroll);
    };
  }, []);

  return (
    <div className="pt-32 bg-black">
      <canvas
        ref={canvasRef}
        //   style={{ position: 'absolute', top: '0', right: '0', width: '100vw', height: '400vh', zIndex: '0' }}
        style={{ width: '99vw', height: '80vh', zIndex: '0' }}
      />
    </div>
  );
};

export default PyramidAnimation;
