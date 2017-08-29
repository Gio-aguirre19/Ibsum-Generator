import React from 'react';

export default class Output extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      values: props.value
    }
  }

  render(){
    return(
      <div class="output">
        { this.props.value }
      </div>
    )
  }
}
