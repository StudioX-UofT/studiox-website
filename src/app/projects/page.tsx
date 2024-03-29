"use client";

import "./project.css";
import Image from "next/image"
import { useState } from 'react';

export default function Page() {
    return (
        <>
        
        <div className="project-container">
            <h1 className="project-title">Projects</h1> 
            <div className="project-grid">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Image
                                src="/projects-pics/project-1.png"
                                alt="Project 1"
                                className="project-image"
                                width={300}
                                height={300}
                                priority
                            />
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/projects-pics/project-2.png"
                                alt="Project 2"
                                className="project-image"
                                width={300}
                                height={300}
                                priority
                            />
                        
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/projects-pics/project-3.png"
                                alt="Project 3"
                                className="project-image"
                                width={300}
                                height={300}
                                priority
                            />
                            
                        </div>
                    </div>
                </div>
                
                
            </div>
        </div>
        
        </>
    );
}