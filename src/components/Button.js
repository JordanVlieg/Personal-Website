import React, {Component} from 'react';
import styled from 'styled-components'
  
const StyledButton = styled.div`
  background: rgb(140, 208, 36);
  border-radius: 3px;
  border: 2px solid rgb(140, 208, 36);
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