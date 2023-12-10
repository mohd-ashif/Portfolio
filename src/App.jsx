import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Link } from 'react-router-dom'; 
import './App.css';
import { darkTheme } from './utils/Theme';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/HeroSection/Hero';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar />
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          
          </Wrapper>
          <Projects/>
            <Wrapper>
              <Education />
              <Contact />
            </Wrapper>
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;