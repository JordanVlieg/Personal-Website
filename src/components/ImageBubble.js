import React, {Component} from 'react';
import headshot from '../assets/headshot.jpg';
import styled from 'styled-components'
import colours from '../Colours'

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 100%;
  border: 3px solid ${colours.blue};
`

export default class ImageBubble extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledImage className={ this.props.className } src={require(`../assets/${this.props.path}`)} />
    )
  }
}