'use client';

import React from 'react';
import { motion } from 'framer-motion';
import '../styles/globals.css';

export default function Home() {
    const cards = [
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        }, 
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        }, 
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        }, 
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'Immersive Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
        {
            name: 'yash Audio',
            src: 'https://framerusercontent.com/images/ilHTpAgctJQni9TmUXfJ3n1Ru4.webp',
        },
    ];
   

    return (
        <div className="relative  min-h-screen overflow-hidden">
            
            <div className="absolute mx-auto left-1/2 -translate-x-1/2 bottom-48  max-w-5xl overflow-hidden">
                <div className=" flex w-full shrink-0 space-x-10">
                    {cards.map((item, index) => (
                        <motion.div key={index} initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }} className="relative w-96 h-auto rounded-lg  shrink-0">
                            <div className="w-full h-full object-cover bg-white">
                                <img src={item.src} alt={item.name} width={384} height={384} className="object-cover"/>
                            </div>
                            <div className="absolute flex justify-center items-center text-white bg-black/80 w-full h-12 bottom-0">
                                {item.name}
                            </div>
                        </motion.div>
                    ))}
                    {cards.map((item, index) => (
                        <motion.div key={index} initial={{ x: 0 }} animate={{ x: '-100%' }} transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop',
                            repeatDelay: 0,
                        }} className="relative w-96 h-auto rounded-lg shrink-0">
                            <div className="w-full h-full object-cover bg-white">
                                <img src={item.src} alt={item.name} width={384} height={384} className="object-cover"/>
                            </div>
                            <div className="absolute flex justify-center items-center text-white bg-black/80 w-full h-12 bottom-0">
                                {item.name}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
                
                <div className="absolute shadow left-1/2 -translate-x-1/2 -bottom-[24rem]  rounded-[60%] w-[80%] h-[60%] bg-white " />
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-[24.3rem]  rounded-[60%] w-[80%] h-[60%] bg-black"/>
        </div>
    );
}
