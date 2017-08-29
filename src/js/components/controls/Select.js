import React from 'react';

export default class Select extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChangeFloor(e){
    this.setState({ value: e.target.value }, () => {
      this.props.onChangeRoot(this.state.value);
    });
  }

  render(){
    return(
      <div clsas="format">
        <select class="format-control" onChange={ this.onChangeFloor.bind(this) }>
          <option value="text">text</option>
          <option value="json">json</option>
          <option value="html">html</option>
        </select>
      </div>
    )
  }
}
