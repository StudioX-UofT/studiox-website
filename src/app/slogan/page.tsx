"use client";

// npm i sass
import useMousePosition from './useMousePosition';
import "./slogan.scss";
import { backOut, motion } from 'framer-motion'; // npm install framer-motion
import { useState } from 'react';

export default function Page() {
    const [isHovered, setIsHovered] = useState(false);
    const { x, y } = useMousePosition();
    const size = isHovered ? 450 : 380;
    return (
    <main className= "main">
        <motion.div className= "mask"
        animate ={{
            WebkitMaskPosition: `${x-size/2}px ${y-size/2}px`,
            //WebkitMaskSize: `${size}px`
        }}
        transition={{type:"tween", ease: "backOut"}}
        >

        <p onMouseEnter={() => {setIsHovered(true)}} onMouseLeave={() => {setIsHovered(false)}}>Connect, Create, Captivate.</p>
        </motion.div>

        <div className = "body">
            <p>Connect, Create, Captivate.</p>
        </div>
    </main>
    )
}
