import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import NavButton from './components/NavButton'
import Aboutus from './pages/AboutUs'
import Hangman from './components/hangman';
const Page1 = () => <div>Page 1 Content</div>;
const Page2 = () => <div>Page 2 Content</div>;


const Header = () => (

 

  <header>
    <nav>
      <ul>
      <NavButton to="/">Home</NavButton>
      <NavButton to="/page1">Page 1</NavButton>
      <NavButton to="/page2">Page 2</NavButton>
      <NavButton to="/aboutus">About Us</NavButton>

      </ul>
    </nav>
  </header>
);

const Content = () => (
  <main>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/page1" element={<Page1 />} />
    <Route path="/page2" element={<Page2 />} />
    <Route path="/AboutUs" element={<Aboutus/>}/>
    <Route path="/Hangman" element={<Hangman/>}/>
    </Routes>

  </main>
);

const Footer = () => <footer>Footer Content</footer>;

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;