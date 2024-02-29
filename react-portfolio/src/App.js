import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Eddie Patterson</h1>
        <p>My Portfolio</p>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Bright and hungry new web developer</p>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
          {/* Add more projects as needed */}
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
      </footer>
    </div>
  );
}

export default App;

