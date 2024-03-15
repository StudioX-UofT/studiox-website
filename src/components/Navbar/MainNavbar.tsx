"use client";

import "@/components/Navbar/MainNavbar.css";
import Image from "next/image";
import Tilt from "react-next-tilt";

function MainNavbar() {
    return (
        <div className="navbar-main">
            <Tilt
                shadow="black"
                lineGlareEnable={false}
                lineGlareBlurEnable={false}
                spotGlareEnable={false}
                perspective="1000px"
            >
                <Image src="/logo.svg" alt="logo" width={900} height={900} />
                <div className="navbar-main-container">
                    <a
                        className="navbar-main-top-left navbar-item"
                        href="/home"
                    >
                        <h1>HOME</h1>
                    </a>
                    <a
                        className="navbar-main-top-right navbar-item"
                        href="/projects"
                    >
                        <h1>PROJECTS</h1>
                    </a>
                    <a
                        className="navbar-main-btm-left navbar-item"
                        href="/team"
                    >
                        <h1>TEAM</h1>
                    </a>
                    <a
                        className="navbar-main-btm-right navbar-item"
                        href="/contact"
                    >
                        <h1>CONTACT</h1>
                    </a>
                </div>
            </Tilt>
        </div>
    );
}

export default MainNavbar;
