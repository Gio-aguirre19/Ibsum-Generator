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
      <div class="ipsum-text">
        { this.props.value }
      </div>
    )
  }
}
