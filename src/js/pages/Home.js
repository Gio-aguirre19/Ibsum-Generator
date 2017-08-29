import React from "react";
import axios from "axios";

import Output from "../components/Output";
import Select from "../components/controls/Select";

export default class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      type: "all-meat",
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
    this.setState({ html: e }, this.getSampleText);
  }

  render() {
    return (
      <div class="home">
        <form class="format-container">
          <label>Format:</label>
          <Select value={ this.state.html } onChangeRoot={ this.showHTML.bind(this) } />
        </form>
        <Output value = { this.state.text } />
      </div>
  )}
}
