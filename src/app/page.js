'use client';

import React from 'react';
import { motion } from 'framer-motion';
import BubbleComponent from '../components/Bubbles/BubbleComponent';
import ParticleCanvas from '../components/Particles/ParticleCanvas';
import '../styles/globals.css';

export default function Home() {
    const cards = [
        {
            name: 'Laser Projection',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/L8b8vvDpX85VYG0iEUtI1cn2Q.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/aHzIKngii9xeOVAigQPf1yk9s.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/L8b8vvDpX85VYG0iEUtI1cn2Q.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/aHzIKngii9xeOVAigQPf1yk9s.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/L8b8vvDpX85VYG0iEUtI1cn2Q.webp?scale-down-to=512',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/aHzIKngii9xeOVAigQPf1yk9s.webp?scale-down-to=512',
        },
    ];
    return (
        <div className="relative flex justify-center items-center w-full min-h-screen bg-black overflow-hidden">
            <div className="absolute flex justify-center items-center overflow-hidden w-[1050px] mx-auto min-h-screen shadow">
                <div className="flex flex-col space-y-10 justify-center items-center -mt-44">
                <div className="w-56 h-28 bg-white rounded-lg">
                    <img src="https://framerusercontent.com/images/atc7sruOc94CCTlA6SnPlOHhiU.png?scale-down-to=512" alt="" className="w-full h-full object-cover"/>
                </div>
                    <h1 className="text-white text-5xl"> <i>Coming Soon</i></h1>
                </div>
                <div className="container z-10">
                    <motion.div 
                        initial={{ x: 0 }}
                        animate={{ x: '-100%' }}
                        transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear',
                        repeatDelay: 0,
                        }} 
                        className="absolute bottom-16 flex w-full shrink-0 space-x-10"
                    >
                        {cards.map((item, ) => (
                            <div  className="relative w-96 h-auto rounded-2xl  shrink-0 overflow-hidden">
                                <div className="w-full h-full">
                                        <img src={item.src} alt={item.name} width={384} height={384} className="object-cover w-full h-full rounded-2xl"/>
                                </div>
                                <div className="absolute flex justify-center items-center text-white bg-black/80 w-full h-16 bottom-0">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                        {cards.map((item, ) => (
                            <div  className="relative w-96 h-auto rounded-lg  shrink-0 ">
                                <div className="w-full h-full">
                                    <img src={item.src} alt={item.name} width={384} height={384} className="object-cover w-full h-full rounded-2xl"/>
                                </div>
                                <div className="absolute flex justify-center items-center text-white bg-black/80 w-full h-16 bottom-0">
                                    {item.name}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                    <div className="left-side"/>
                    <div className="right-side"/>
                    <div className="w-full h-full">
                    </div>
                </div>
                <div>
                    <BubbleComponent/>
                    <ParticleCanvas/>
                </div>
                <div className="white-ball"/>
                <div className="black-ball"/>
            </div>
        </div>
    );
}
