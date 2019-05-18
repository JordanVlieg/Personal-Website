import React, { Component } from 'react';
import ImageBubble from './ImageBubble'
import PageFoot from './PageFoot'
import Button from './Button'

import logo from '../logo.svg';
import resume from '../assets/JVlieg_Resume.pdf';

import styled from 'styled-components'

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background: rgb(61, 62, 65);
`

const ResumeButton = styled(Button)`
  display: inline-block;
`

const Headshot = styled(ImageBubble)`
  width: 200px;
  height: 200px;
  margin: 30px;
`

const Center = styled.div`
  display: inline-block;
`

function App() {
  return (
    <div> 
      <MainBox>
        <Headshot path="headshot.jpg"/>  
        <Center>
          <h1>
            Welcome!  I'm Jordan.
          </h1>
          <h3>
            I'm a software development consultant
          </h3>
          <p>
            This site is very much a work in progress.  Last edited on 2019-05-05.
          </p>
          <ResumeButton onClick={() => window.location = resume}>
            Review My Resume
          </ResumeButton>
        </Center>
      </MainBox>
      <PageFoot />
    </div>
  );
}

export default App;
