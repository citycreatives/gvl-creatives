import React, { Component } from 'react';
import Logo from './Logo.js';
import Member from './Member.js';
import Weather from './Weather.js';
import art from './art.gif';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [
        { name: "Chandler Roth" },
        { name: "Brandon D'Adam" },
        { name: "Jared Rauh" },
        { name: "Parker Roth" },
        { name: "Nicklaus Hernan" }
      ]
    }
  }

  render() {
    return (
      <div className="content">
        <header>
          <Logo />
          <Weather />
        </header>

        <div className="hero">
          <div className="hero-content">
            <h1>Discuss, share, and think.</h1>
            <p>We are a guild of creatives from different companies, industries, and teams in Greenville, SC.</p>
            <a href="https://chandlerroth.typeform.com/to/jtdt71" className="button">Join the Guild</a>
          </div>
          <div className="hero-illustration">
            <img src={art} alt="Art" />
          </div>
        </div>

        <h1>{this.state.members.length} Guild Members</h1>
        <div className="members">
          {this.state.members.map((member, index) => <Member key={index} name={member.name} />)}
        </div>

      </div>
    );
  }
}

export default App;
