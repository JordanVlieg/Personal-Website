import React, { Component } from 'react';
import ImageBubble from './ImageBubble'
import PageFoot from './PageFoot'
import Button from './Button'

import logo from '../logo.svg';
import resume from '../assets/JVlieg_Resume.pdf';

import '../styles/App.css';
import styled from 'styled-components'

const myStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '85vh',
  background: 'rgb(61, 62, 65)',
};

const ResumeButton = styled(Button)`
  width: 150px;
`

function App() {
  return (
    <div className="App"> 
      <div style={myStyle}>
        <h1>
          Welcome!  I'm Jordan.
        </h1>
        <h3>
          I'm a software development consultant
        </h3>
        <ResumeButton onClick={() => window.location = resume}>
          Review My Resume
        </ResumeButton>
        <ImageBubble path="headshot.jpg"/>
      </div>
      <PageFoot />
    </div>
  );
}

export default App;
