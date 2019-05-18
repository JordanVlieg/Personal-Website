import React, {Component} from 'react';
import headshot from '../assets/headshot.jpg';
import styled from 'styled-components'

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 100%;
  border: 5px solid rgb(140, 208, 36);
  display: flex;
  flex-direction: column;
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