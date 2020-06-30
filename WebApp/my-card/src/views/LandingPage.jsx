import React from "react";

import logo from '../logo.svg';
import mycardlogo from '../mycardlogo.png';


export default function LandingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mycardlogo} className="App-logo" alt="logo" />
        <div>
          <p>
            Hello frens', this started development the 28th of June 2020. <br/>
            Current version Alpha 0.0.02
          </p>
        </div>
        <p>
          Powered by React and developed by &nbsp;
          <a
            className="App-link"
            href="https://github.com/MikeAlvarado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mike Alvarado
          </a>
        </p>
        <a
          className="App-link"
          href="/login"
          rel="noopener noreferrer"
        >
          Log In
        </a>
      </header>
    </div>
  )
}
