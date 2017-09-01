import React from 'react';

export default class Meat extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChangeType(e){
    this.setState({ value: e.target.value }, () => {
      //Sends prop value up one level
      this.props.onChangeTypeRoot(this.state.value);
    })
  }

  render(){
    return(
      <div class="format__meat-or-filler">
        <select class="format-control" onChange={ this.onChangeType.bind(this) }>
          <option value="meat-and-filler">Meats & Filer</option>
          <option value="meat">Meats Only</option>
        </select>
      </div>
    )
  }
}
