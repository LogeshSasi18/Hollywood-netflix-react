import Button from "./Button";
import "./App.css";
import Gallery from "./Gallery";
import React from "react";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
    };
  }

  getData = (val) => {
    // console.log(val)
    this.setState({ image: val });
  };


  render() {
    return (
      <div className="main1">
        <div className="main">
          <Navbar />
          <Button sendData={this.getData} />
          <Gallery get={this.state.image} />
        </div>
      </div>
    );
  }
}

export default App;
