import React from 'react';
import ImageBubble from './ImageBubble'
import PageFoot from './PageFoot'
import Button from './Button'

import resume from '../assets/JVlieg_Resume.pdf'
import styled from 'styled-components'
import colours from '../Colours'

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background: rgb(61, 62, 65);
`

const ResumeButton = styled(Button)`
  color: ${colours.grey};
  font-size: 24px;
  display: inline-block;
`

const Headshot = styled(ImageBubble)`
  width: 300px;
  height: 300px;
  margin: 30px;
`

const Center = styled.div`
  color: white;
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
            This site is very much a work in progress.  Last edited on 2019-06-12.
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
