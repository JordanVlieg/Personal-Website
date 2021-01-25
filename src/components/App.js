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
  overflow: auto;
  background: rgb(61, 62, 65);
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const ResumeButton = styled(Button)`
  color: ${colours.grey};
  font-size: 24px;
  display: inline-block;
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const Headshot = styled(ImageBubble)`
  width: 30vh;
  height: 30vh;
  margin 0px 20px;
`

const TextContent = styled.div`
  color: white;
  margin: 15px;
  height: 30vh;
`

const ButtonBox = styled.div`
  @media (max-width: 700px) {
    text-align: center
  }
`

function App() {
  return (
    <div>
      <MainBox>
        <Headshot path="headshot.jpg"/>
        <TextContent>
          <h1>
            Welcome!  I'm Jordan.
          </h1>
          <h2>
            I'm a software developer with experience in full stack applications.
          </h2>
          <h3>
            I am currently open to new opportunities.
          </h3>
          <p>
            Located in San Francisco.  I have experience with Golang, C#, Ruby, React, C, Java, and more!
          </p>
          <p>
            A passion for building secure systems, protecting user data, and preventing fraud.
          </p>
          <ButtonBox>
            <ResumeButton onClick={() => window.location = resume}>
              Review My Resume
            </ResumeButton>
          </ButtonBox>
        </TextContent>
      </MainBox>
      <PageFoot />
    </div>
  );
}

export default App;
