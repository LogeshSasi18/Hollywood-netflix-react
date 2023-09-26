import React from "react";
import "./Popup.css";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false,
    };
  }

  hide = () => {
    this.props.hidedata(this.state.close);
  };

  render() {
    return (
      <div className="popup">
        <div className="p-c">
          <p onClick={this.hide}>X</p>
          <img src={this.props.popupdata.image} alt="" />
          <h3>{this.props.popupdata.nameList}</h3>
          <h3>{this.props.popupdata.CBFC}</h3>
        </div>
      </div>
    );
  }
}

export default Popup;
