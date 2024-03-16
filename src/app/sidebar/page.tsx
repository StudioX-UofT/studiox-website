"use client";

import "./sidebar.css";

export default function Page() {
    return (
      <>
        <div id="sidebar">
          <ul>
            <li><h1>StudioX</h1></li>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/team">Team</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </>
    );
  }