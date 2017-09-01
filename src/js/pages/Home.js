import React from "react";
import axios from "axios";

import Output from "../components/Output";
import Select from "../components/controls/Select";
import Length from "../components/controls/Length";
import Meat from "../components/controls/MeatOrFiller";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: "meat-and-filler",
      paras: 4,
      html: 'text',
      text: ''
    }
  }

  componentWillMount(){
    this.getSampleText();
  }

  getSampleText(){
    axios.get("https://baconipsum.com/api/?type=" + this.state.type  + "&paras=" + this.state.paras + "&format=" + this.state.html)
      .then((response) => {
        this.setState({ text: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  showHTML(e){
    //Sets state and calls getSampleText Function
    this.setState({ html: e }, this.getSampleText);
  }

  changeParas(num){
    //Sets state and calls getSampleText Function
    this.setState({ paras: num }, this.getSampleText);
  }

  changeType(type){
    //Sets state and calls getSampleText Function
    this.setState({ type: type }, this.getSampleText);
  }

  render() {
    return (
      <div class="home">
        <form class="format">
          <div class="format__group">
            <label>Length:</label>
            <Meat value={ this.state.type } onChangeTypeRoot={ this.changeType.bind(this) } />
          </div>
          <div class="format__group">
            <label>Length:</label>
            <Length value={ this.state.paras } onChangeLengthRoot={ this.changeParas.bind(this) } />
          </div>
          <div class="format__group">
            <label>Format:</label>
            <Select value={ this.state.html } onChangeFormatRoot={ this.showHTML.bind(this) } />
          </div>
        </form>
        <Output value = { this.state.text } />
      </div>
  )}
}
