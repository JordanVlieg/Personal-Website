import React, {Component} from 'react';
import styled from 'styled-components'
import colours from '../Colours'
  
const StyledButton = styled.div`
  background: ${colours.blue};
  border-radius: 3px;
  border: 2px solid ${colours.blue};
  padding: 0.25em 1em;
`

export default class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledButton className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </StyledButton>
    )
  }
}