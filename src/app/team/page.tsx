"use client";

import "./team.css";
import Image from "next/image"
import { useState } from 'react';

export default function Page() {
    return (
        <>
            <h1> team </h1>
            <div className="team-grid">
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/benji.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Benji Jacob ®</h2>
                                <p className="title">President</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/trisha.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Trisha Banerjee ®</h2>
                                <p className="title">VP External</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/treasure.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Treasure Fatile ®</h2>
                                <p className="title">VP Internal</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/kelly.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Kelly Nguyen ®</h2>
                                <p className="title">VP Finance</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/tina.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Tina Cheng ®</h2>
                                <p className="title">Marketing Director</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/ruby.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Ruby Yip ®</h2>
                                <p className="title">Marketing Director</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <Image
                                src="/team-pics/paris.png"
                                alt="Team member 1"
                                className="team-image"
                                width={100}
                                height={100}
                                priority
                            />
                            <div className="container">
                                <h2>Paris Phan ®</h2>
                                <p className="title">Marketing Director</p>
                                <p><a href="" className="button">Contact</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}