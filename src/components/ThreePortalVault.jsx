import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreePortalVault - High-performance WebGL 3D scene
 * 
 * Features:
 * 1. 8 Floating 3D Metallic Character Blocks displaying the verified keys
 * 2. Glowing 3D energy lines connecting blocks to the central nexus
 * 3. Multiple concentric rotating metallic rings and mechanical iris
 * 4. 3D Floating geometric particles with depth and perspective
 * 5. Cinematic camera dolly / zoom into the portal
 */
export default function ThreePortalVault({ chars, stage }) {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const reqIdRef = useRef(null);

  // References to animated 3D objects
  const blocksRef = useRef([]);
  const linesRef = useRef(null);
  const ringsRef = useRef([]);
  const particlesRef = useRef(null);
  const coreMeshRef = useRef(null);
  const currentStageRef = useRef(stage);

  useEffect(() => {
    currentStageRef.current = stage;
  }, [stage]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 4. Lighting (Monochrome / High Contrast)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 8, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x888888, 1.5);
    rimLight.position.set(-6, -5, -4);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(0xffffff, 3.5, 20);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // 5. Generate Texture for 3D Character Blocks
    const createCharTexture = (char) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext('2d');

      // Metallic background face
      ctx.fillStyle = '#0a0a0a';
      ctx.fillRect(0, 0, 256, 256);

      // Border glow
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 10;
      ctx.strokeRect(8, 8, 240, 240);

      // Inner subtle border
      ctx.strokeStyle = '#444444';
      ctx.lineWidth = 2;
      ctx.strokeRect(20, 20, 216, 216);

      // Bold character
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 140px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(char || '', 128, 134);

      const texture = new THREE.CanvasTexture(canvas);
      texture.anisotropy = 4;
      return texture;
    };

    // 6. Create 8 Floating 3D White Metallic Blocks
    const blocks = [];
    const blockGeometry = new THREE.BoxGeometry(0.75, 0.95, 0.18);
    const initialRadius = 4.6;

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
      const texture = createCharTexture(chars[i] || ' ');

      const materials = [
        new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.9, roughness: 0.2 }),
        new THREE.MeshStandardMaterial({ map: texture, metalness: 0.7, roughness: 0.25 }), // Front face
        new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.9, roughness: 0.2 })
      ];

      const mesh = new THREE.Mesh(blockGeometry, materials);
      const targetPos = new THREE.Vector3(Math.cos(angle) * initialRadius, Math.sin(angle) * initialRadius, 0);
      mesh.position.copy(targetPos);
      mesh.userData = {
        originAngle: angle,
        initialRadius: initialRadius,
        targetRadius: 1.8,
        convergeProgress: 0,
        bobSpeed: 0.02 + i * 0.003
      };

      scene.add(mesh);
      blocks.push(mesh);
    }
    blocksRef.current = blocks;

    // 7. Energy Lines Connecting Blocks to Center
    const linePositions = new Float32Array(8 * 2 * 3);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });
    const energyLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(energyLines);
    linesRef.current = energyLines;

    // 8. 3D Concentric Portal Rings
    const rings = [];
    const ringSpecs = [
      { radius: 3.8, tube: 0.06, radialSegments: 16, tubularSegments: 64, speedZ: 0.008, speedY: 0.004, color: 0x666666 },
      { radius: 3.1, tube: 0.07, radialSegments: 16, tubularSegments: 8, speedZ: -0.015, speedY: -0.003, color: 0xffffff }, // Octagonal
      { radius: 2.3, tube: 0.05, radialSegments: 16, tubularSegments: 64, speedZ: 0.022, speedY: 0.006, color: 0xaaaaaa },
      { radius: 1.6, tube: 0.08, radialSegments: 16, tubularSegments: 48, speedZ: -0.032, speedY: 0.008, color: 0xffffff },
      { radius: 1.0, tube: 0.04, radialSegments: 16, tubularSegments: 32, speedZ: 0.045, speedY: -0.01, color: 0xffffff }
    ];

    ringSpecs.forEach((spec) => {
      const geom = new THREE.TorusGeometry(spec.radius, spec.tube, spec.radialSegments, spec.tubularSegments);
      const mat = new THREE.MeshStandardMaterial({
        color: spec.color,
        metalness: 0.95,
        roughness: 0.15,
        wireframe: spec.tubularSegments === 8
      });
      const ringMesh = new THREE.Mesh(geom, mat);
      ringMesh.userData = { speedZ: spec.speedZ, speedY: spec.speedY };
      ringMesh.scale.set(0.1, 0.1, 0.1); // Starts collapsed, expands upon unlock
      scene.add(ringMesh);
      rings.push(ringMesh);
    });
    ringsRef.current = rings;

    // 9. Central Portal Core (Glowing Sphere with layered wireframe shell)
    const coreGeom = new THREE.IcosahedronGeometry(0.7, 3);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      wireframe: true,
      transparent: true,
      opacity: 0.85
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreMesh.scale.set(0.01, 0.01, 0.01);
    scene.add(coreMesh);
    coreMeshRef.current = coreMesh;

    // 10. Floating 3D Geometric Particles
    const particleCount = 280;
    const particleGeom = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const velArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 16;
      posArray[i + 1] = (Math.random() - 0.5) * 16;
      posArray[i + 2] = (Math.random() - 0.5) * 14;

      velArray[i] = (Math.random() - 0.5) * 0.008;
      velArray[i + 1] = (Math.random() - 0.5) * 0.008;
      velArray[i + 2] = (Math.random() - 0.5) * 0.012;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.08,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);
    particlesRef.current = { points: particles, vel: velArray };

    // 11. Animation Loop (60 FPS)
    let clock = new THREE.Clock();

    const animate = () => {
      reqIdRef.current = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const time = clock.getElapsedTime();
      const currentStage = currentStageRef.current;

      // Camera dolly zoom based on stage
      if (currentStage === 'portal' || currentStage === 'game_reveal') {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 6.2, 0.03);
      } else {
        camera.position.z = THREE.MathUtils.lerp(camera.position.z, 8.8, 0.05);
      }

      // Animate Rings
      rings.forEach((ring) => {
        ring.rotation.z += ring.userData.speedZ;
        ring.rotation.y += ring.userData.speedY;

        // Scale up rings when entering unlock / portal stage
        if (currentStage === 'unlock' || currentStage === 'portal' || currentStage === 'game_reveal') {
          ring.scale.lerp(new THREE.Vector3(1, 1, 1), 0.04);
        }
      });

      // Animate Core Mesh
      if (coreMesh) {
        coreMesh.rotation.x += 0.02;
        coreMesh.rotation.y += 0.03;
        if (currentStage === 'portal' || currentStage === 'game_reveal') {
          coreMesh.scale.lerp(new THREE.Vector3(1.3 + Math.sin(time * 3) * 0.1, 1.3 + Math.sin(time * 3) * 0.1, 1.3), 0.05);
        } else if (currentStage === 'unlock') {
          coreMesh.scale.lerp(new THREE.Vector3(0.8, 0.8, 0.8), 0.05);
        }
      }

      // Animate Character Blocks & Connecting Lines
      const linePos = energyLines.geometry.attributes.position.array;
      let lineIdx = 0;

      blocks.forEach((block, idx) => {
        const u = block.userData;

        // Convergence logic towards center in unlock & portal stages
        let targetR = u.initialRadius;
        if (currentStage === 'unlock') {
          targetR = 2.4;
        } else if (currentStage === 'portal' || currentStage === 'game_reveal') {
          targetR = 3.6; // Expands outward to frame the portal
        }

        const curRadius = THREE.MathUtils.lerp(
          Math.sqrt(block.position.x * block.position.x + block.position.y * block.position.y),
          targetR,
          0.05
        );

        const currentAngle = u.originAngle + (currentStage === 'portal' || currentStage === 'game_reveal' ? time * 0.2 : 0);
        const floatZ = Math.sin(time * 2 + idx) * 0.15;

        block.position.x = Math.cos(currentAngle) * curRadius;
        block.position.y = Math.sin(currentAngle) * curRadius;
        block.position.z = floatZ;

        // Subtle block rotation
        block.rotation.y = Math.sin(time + idx) * 0.2;
        block.rotation.x = Math.cos(time + idx) * 0.1;

        // Update Energy Lines
        linePos[lineIdx++] = block.position.x;
        linePos[lineIdx++] = block.position.y;
        linePos[lineIdx++] = block.position.z;

        linePos[lineIdx++] = 0; // Connected to center
        linePos[lineIdx++] = 0;
        linePos[lineIdx++] = 0;
      });

      energyLines.geometry.attributes.position.needsUpdate = true;

      // Animate Floating Particles
      if (particlesRef.current) {
        const pos = particlesRef.current.points.geometry.attributes.position.array;
        const vels = particlesRef.current.vel;
        for (let i = 0; i < pos.length; i += 3) {
          pos[i] += vels[i];
          pos[i + 1] += vels[i + 1];
          pos[i + 2] += vels[i + 2];

          // Wrap boundaries
          if (pos[i] > 8) pos[i] = -8;
          if (pos[i] < -8) pos[i] = 8;
          if (pos[i + 1] > 8) pos[i + 1] = -8;
          if (pos[i + 1] < -8) pos[i + 1] = 8;
          if (pos[i + 2] > 7) pos[i + 2] = -7;
          if (pos[i + 2] < -7) pos[i + 2] = 7;
        }
        particlesRef.current.points.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [chars]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 5
      }}
    />
  );
}
