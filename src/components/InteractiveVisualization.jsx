import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './InteractiveVisualization.css';

const InteractiveVisualization = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesRef = useRef(null);
  const isGesturingRef = useRef(false);
  const gestureStartRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  // System status state
  const [systemStatus, setSystemStatus] = React.useState({
    cpuUsage: 0,
    memoryUsage: 0,
    networkUsage: 0
  });

  // Notifications state
  const [notifications, setNotifications] = React.useState([]);

  // Initialize Three.js scene
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating particles
    const particles = new THREE.Group();
    for (let i = 0; i < 100; i++) {
      const geometry = new THREE.SphereGeometry(0.1, 8, 8);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ffff });
      const particle = new THREE.Mesh(geometry, material);
      
      particle.position.x = (Math.random() - 0.5) * 10;
      particle.position.y = (Math.random() - 0.5) * 10;
      particle.position.z = (Math.random() - 0.5) * 10;
      
      particles.add(particle);
    }
    scene.add(particles);

    camera.position.z = 5;

    // Store references
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    particlesRef.current = particles;

    // Animation loop
    const animate = () => {
      animationFrameRef.current = requestAnimationFrame(animate);
      
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      
      particles.children.forEach(particle => {
        particle.position.y += Math.sin(Date.now() * 0.001 + particle.position.x) * 0.01;
      });

      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  // System status simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSystemStatus({
        cpuUsage: Math.random() * 100,
        memoryUsage: Math.random() * 100,
        networkUsage: Math.random() * 100
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Audio visualization
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     canvas.width = 400;
//     canvas.height = 200;

//     const drawVisualization = () => {
//       ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       const bars = 50;
//       const barWidth = canvas.width / bars;

//       ctx.fillStyle = '#0ff';
//       for (let i = 0; i < bars; i++) {
//         const height = Math.random() * canvas.height;
//         ctx.fillRect(i * barWidth, canvas.height - height, barWidth - 2, height);
//       }

//       requestAnimationFrame(drawVisualization);
//     };

//     const animationId = requestAnimationFrame(drawVisualization);

//     return () => {
//       cancelAnimationFrame(animationId);
//     };
//   }, []);

  // Notification system
  useEffect(() => {
    const messages = [
      "System optimization complete",
      "Network connection stable",
      "Security scan in progress",
      "Updates available",
      "Performance analysis completed"
    ];

    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now(),
        message: messages[Math.floor(Math.random() * messages.length)],
        top: `${Math.random() * 80 + 10}%`,
        left: `${Math.random() * 80 + 10}%`
      };

      setNotifications(prev => [...prev, newNotification]);

      // Remove notification after 3 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 3000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Gesture controls
  useEffect(() => {
    const gestureArea = document.getElementById('gesture-area');

    const handleMouseDown = (e) => {
      isGesturingRef.current = true;
      gestureStartRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e) => {
      if (!isGesturingRef.current || !particlesRef.current) return;
      
      const deltaX = e.clientX - gestureStartRef.current.x;
      const deltaY = e.clientY - gestureStartRef.current.y;
      
      particlesRef.current.rotation.y += deltaX * 0.001;
      particlesRef.current.rotation.x += deltaY * 0.001;
    };

    const handleMouseUp = () => {
      isGesturingRef.current = false;
    };

    gestureArea?.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      gestureArea?.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      if (cameraRef.current && rendererRef.current) {
        cameraRef.current.aspect = window.innerWidth / window.innerHeight;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="container" ref={containerRef}>
      <div id="overlay"></div>
      {/* <div id="center-circle"></div> */}
      <div id="gesture-area"></div>
      
      {/* <div id="stats-panel" className="panel">
        <h2>System Status</h2>
        <div className="stat">
          <span>CPU Usage</span>
          <span id="cpu-usage">{systemStatus.cpuUsage.toFixed(1)}%</span>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              id="cpu-bar" 
              style={{ width: `${systemStatus.cpuUsage}%` }}
            ></div>
          </div>
        </div>
        <div className="stat">
          <span>Memory</span>
          <span id="memory-usage">{systemStatus.memoryUsage.toFixed(1)}%</span>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              id="memory-bar" 
              style={{ width: `${systemStatus.memoryUsage}%` }}
            ></div>
          </div>
        </div>
        <div className="stat">
          <span>Network</span>
          <span id="network-usage">{systemStatus.networkUsage.toFixed(1)}%</span>
          <div className="progress-bar">
            <div 
              className="progress-bar-fill" 
              id="network-bar" 
              style={{ width: `${systemStatus.networkUsage}%` }}
            ></div>
          </div>
        </div>
      </div> */}

      {/* <div id="visualization-panel" className="panel">
        <canvas id="visualization" ref={canvasRef}></canvas>
      </div> */}

    </div>
  );
};

export default InteractiveVisualization;