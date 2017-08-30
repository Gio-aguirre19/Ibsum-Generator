import React from 'react';

export default class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChangeFormat(e){
    this.setState({ value: e.target.value }, () => {
      //Sends prop value up a level
      this.props.onChangeFormatRoot(this.state.value);
    });
  }

  render(){
    return(
      <div class="format">
        <select class="format-control" onChange={ this.onChangeFormat.bind(this) }>
          <option value="text">text</option>
          <option value="html">html</option>
        </select>
      </div>
    )
  }
}
