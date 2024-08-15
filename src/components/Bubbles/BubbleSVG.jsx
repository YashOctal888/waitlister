import React from 'react';

const BubbleSVG = () => {
    return (
        <svg className="bubblePopper" viewBox="0 0 100 100">
            <defs>
                <g id="bubbleDef"/>
                <filter id="roughEdges">
                    <feTurbulence type="fractalNoise" baseFrequency=".3" numOctaves="10" />
                    <feDisplacementMap in="SourceGraphic" scale="25" />
                    <feComposite operator="in" in2="SourceGraphic" />
                </filter>
                <radialGradient id="grad">
                    <stop offset="0%" stopColor="rgba(0,255,255,0.5)" />
                    <stop offset="100%" stopColor="rgba(0,255,255,0.1)" />
                </radialGradient>
            </defs>
            <g id="bubbleArea"/>
        </svg>
    );
};

export default BubbleSVG;
