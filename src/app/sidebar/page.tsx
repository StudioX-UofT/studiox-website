"use client";

import "./sidebar.css";
import Image from "next/image"
import { useState } from 'react';

export default function Page() {
    // https://medium.com/@ryaddev/building-a-responsive-aside-navbar-in-nextjs-and-tailwindcss-d8da77ec237c
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="main-content">
                <h1>studioX</h1>
                <button className="menu-icon-container" onClick={toggleSidebar}>
                    <Image
                        src="/menu-icon.svg"
                        alt="Menu Icon"
                        className="menu-icon"
                        width={25}
                        height={24}
                        priority
                    />
                </button>
            </div>
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="top-bar">
                    <h1>StudioX</h1>
                    <button className="menu-icon-container" onClick={toggleSidebar}>
                        <Image
                            src="/menu-icon.svg"
                            alt="Menu Icon"
                            className="menu-icon"
                            width={25}
                            height={24}
                            priority
                        />
                    </button>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/team">Team</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        </>
    );
}