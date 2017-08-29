import React from "react";
import axios from "axios";


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
        this.setState({ text: response.data}, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div class="home">
      </div>
  )}
}
