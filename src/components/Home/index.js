import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <span className="welcome">Welcome to the </span>
        <span>SoC </span>
        <span className="green">mentoring </span>
        <span>tool!</span>
      </div>
      <div className="animated-background">
        <img src="/static/images/mentor.png" />
      </div>
      <div className="tips">
        <a href="/viewsessions">
          Why not try <span className="green">viewing</span> your sessions?
        </a>
        <a href="/createsession">
          Or <span className="green">creating</span> a new session?
        </a>
      </div>
    </div>
  );
}
