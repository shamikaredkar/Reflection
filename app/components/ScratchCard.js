'use client';
import React, { useEffect } from 'react';
import './Dashboard.css';

export default function ScratchCard() {
  useEffect(() => {
    const canvas = document.getElementById('scratch-card');
    const ctx = canvas.getContext('2d');

    const width = 300;
    const height = 100;
    canvas.width = width;
    canvas.height = height;

    // Step 1: Apply the black overlay (this is the scratchable part)
    const applyOverlay = () => {
      ctx.fillStyle = '#5E854C'; // Black overlay
      ctx.fillRect(0, 0, width, height); // Apply black overlay
    };

    // Step 2: Scratch logic to remove the black overlay
    const scratch = (x, y) => {
      ctx.globalCompositeOperation = 'destination-out'; // Erase the overlay
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2); // Scratch a circular area
      ctx.fill();
    };

    let isScratching = false;

    const startScratch = (e) => {
      isScratching = true;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      scratch(x, y);
    };

    const continueScratch = (e) => {
      if (!isScratching) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      scratch(x, y);
    };

    const stopScratch = () => {
      isScratching = false;
    };

    // Add event listeners for scratch functionality
    canvas.addEventListener('mousedown', startScratch);
    canvas.addEventListener('mousemove', continueScratch);
    window.addEventListener('mouseup', stopScratch);

    // Apply the overlay on load
    applyOverlay(); // Apply the black overlay first

    // Cleanup event listeners on unmount
    return () => {
      canvas.removeEventListener('mousedown', startScratch);
      canvas.removeEventListener('mousemove', continueScratch);
      window.removeEventListener('mouseup', stopScratch);
    };
  }, []);

  return (
    <div className="main-container">
      <div className="scratch-container">
        {/* The text will be placed underneath the canvas */}
        <div className="scratch-text">what do you wish to release today?</div>
        <canvas id="scratch-card" width={200} height={50}></canvas>
      </div>
    </div>
  );
}
