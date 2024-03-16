"use client";

import "@/components/sidebar/sidebar.css";

export default function Page() {
    return (
      <>
        <h1>Project</h1>
        <div id="sidebar">
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