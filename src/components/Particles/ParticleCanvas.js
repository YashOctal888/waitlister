'use client';

import React, { useEffect, useRef } from 'react';
import { ParticleSystem } from './ParticleSystem';

const ParticleCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Update canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const system = new ParticleSystem(canvas, { x: canvas.width, y: canvas.height });
        system.ammount = 100;
        system.diameter = { min: 2, max: 5 }; // Adjust size for visibility
        system.life = { min: 10, max: 10 }; // 10 seconds lifespan
        system.speed = { x: { min: -5, max: 5 }, y: { min: -5, max: 5 } }; // Adjust speed for desired movement
        system.init();

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            system.size = { x: canvas.width, y: canvas.height };
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute left-0 bottom-44 z-[-1] max-w-5xl  mx-auto"
            style={{ backgroundColor: 'black',height:'auto',width:'auto' }}
        />
    );
};

export default ParticleCanvas;
