import React from "react";
import "./Button.css";
import Slider from "./slider/Slider";
import data from "./slider/Imgdata";
import Dots from "./slider/Dots";
import Caption from "./slider/Caption";

class Button extends React.Component {
  Btnobj = [
    { value: "All", category: "all" },
    { value: "Horror", category: "horror" },
    { value: "Action", category: "action" },
    { value: "Adventure", category: "adventure" },
    { value: "Animation", category: "animation" },
  ];

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 1,
      arrow: "left",
    };
  }

  handleclick = (val) => {
    this.props.sendData(val);
    console.log(val);
  };

  handlestr = this.Btnobj.map((val) => {
    return (
      <button
        onClick={() => {
          this.handleclick(val.category);
        }}
      >
        {val.value}
      </button>
    );
  });

  prevslide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === 0
          ? data.length - 1
          : this.state.slideIndex - 1,
      arrow: "left",
    });
  }
  nextslide() {
    this.setState({
      slideIndex:
        this.state.slideIndex === data.length - 1
          ? 0
          : this.state.slideIndex + 1,
      arrow: "right",
    });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.autoplay(), 5000);
  }
  autoplay() {
    if (this.state.arrow === "left") {
      this.setState({
        slideIndex:
          this.state.slideIndex === 0
            ? data.length - 1
            : this.state.slideIndex - 1,
      });
    } else {
      this.setState({
        slideIndex:
          this.state.slideIndex === data.length - 1
            ? 0
            : this.state.slideIndex + 1,
      });
    }
  }

  render() {
    return (
      <div className="b-c">
        <div className="d-f">
          <div>
            <h1 className="main-h">Hollywood Films</h1>
            <p className="main-det">
              Action, romance, comedy, fantasy - Hollywood films have it all.The
              Top Rated Movie list only includes feature films...
            </p>
            <Caption slideIndex={this.state.slideIndex} />
          </div>
          <div className="cnr">
            <div className="slide-cont">
              <Slider slideIndex={this.state.slideIndex} />
            </div>
          </div>
          <span className="prev" onClick={() => this.prevslide()}>
            <i class="fa-solid fa-arrow-right fa-rotate-180 fa-xl"></i>
          </span>
          <span className="next" onClick={() => this.nextslide()}>
            <i class="fa-solid fa-arrow-right fa-xl"></i>
          </span>
        </div>
        <Dots slideIndex={this.state.slideIndex} />
        <div className="btn-cat">{this.handlestr}</div>
      </div>
    );
  }
}

export default Button;
