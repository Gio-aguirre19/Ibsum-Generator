import React from 'react';

export default class Length extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: props.value
    }
  }

  onChangeLength(e){
    this.setState({ value: e.target.value }, () => {
      //Sends prop value up one level
      this.props.onChangeLengthRoot(this.state.value);
    })
  }

  render(){
    return(
      <div class="Paragraph-Length">
        <input class="form-control" type="number" value={ this.state.value } onChange={ this.onChangeLength.bind(this) } />
      </div>
    )
  }
}
