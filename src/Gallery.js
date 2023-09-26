import React from "react";
import "./Gallery.css";
import sparten from "./img/300 (a).jpg";
import avenj from "./img/adv.jpeg";
import avatar from "./img/avatar.jpg";
import adven from "./img/adve.jpg";
import alice from "./img/alice.png";
import badboy from "./img/badboy(a).jpg";
import badman from "./img/badman(a).jpg";
import conjuring from "./img/conjuring 2.jpg";
import it from "./img/it.jpg";
import kunfu from "./img/kunfu.jpg";
import line from "./img/line.webp";
import nun from "./img/nun.jpg";
import aqp from "./horror/a quiet please.jpg";
import con2 from "./horror/insidious.jpg";
import lnis from "./horror/last night in soho.jpg";
import mist from "./horror/the mist.jpg";
import tmr from "./horror/The Mummy Returns.jpg";
import exp from "./action/expendables.jpg";
import fast from "./action/fast x.jpg";
import kingsman from "./action/kingsman.jpg";
import mm from "./action/mad max.jpg";
import pri from "./action/prisoners.jpg";
import wol from "./action/wolverine.jpg";
import nt from "./adventure/National Treasure.jpeg";
import potc from "./adventure/Pirates of the Caribbean.jpg";
import sm from "./adventure/Spider-Man.jpg";
import tlor from "./adventure/The Lord of the Rings.jpg";
import Tangled from "./img/Tangled.jpg";
import br from "./img/Barbie as Rapunzel.jpg";
import rata from "./img/ratato.jpeg";
import beauty from "./img/beauty.jpeg";
import Popup from "./Popup";

class Gallery extends React.Component {
  movieimg = [
    {
      image: sparten,
      nameList: "300",
      CBFC: "A 2006 ‧ Action/War ‧ 1h 57m",
      List: "all action",
    },
    {
      nameList: "Avengers: Endgame",
      CBFC: "U/A 2019 ‧ Action/Sci-fi ‧ 3h 2m",
      image: avenj,
      List: "all adventure",
    },
    {
      image: nt,
      nameList: "National Treasure: Book of Secrets",
      CBFC: "U 2007 ‧ Adventure/Action ‧ 2h 4m",
      List: "all adventure",
    },
    {
      image: potc,
      nameList: "Pirates of the Caribbean: On Stranger Tides",
      CBFC: "U/A 2011 ‧ Adventure/Action ‧ 2h 17m",
      List: "all adventure",
    },
    {
      image: sm,
      nameList: "Spider-Man: No Way Home",
      CBFC: "U/A 2021 ‧ Action/Sci-fi ‧ 2h 28m",
      List: "all adventure",
    },
    {
      image: tlor,
      nameList: "The Lord of the Rings: The Fellowship of the Ring",
      CBFC: "2001 ‧ Adventure/Fantasy ‧ 2h 58m",
      List: "all adventure",
    },
    {
      image: avatar,
      nameList: "Avatar: The Way of Water",
      CBFC: "U/A 2022 ‧ Sci-fi/Action ‧ 3h 12m",
      List: "all adventure",
    },
    {
      image: adven,
      nameList: "Journey to the Center of the Earth",
      CBFC: "2008 ‧ Adventure/Sci-fi ‧ 1h 33m",
      List: "all adventure",
    },
    {
      image: beauty,
      nameList: "Beauty and the Beast",
      CBFC: "U 1991 ‧ Musical/Family ‧ 1h 24m",
      List: "all animation",
    },
    {
      image: alice,
      nameList: "Alice in Wonderland",
      CBFC: "U 2010 ‧ Adventure/Family ‧ 1h 48m",
      List: "all animation",
    },
    {
      image: Tangled,
      nameList: "Tangled",
      CBFC: "U 2010 ‧ Family/Musical ‧ 1h 40m",
      List: "all animation",
    },
    {
      image: br,
      nameList: "Barbie as Rapunzel",
      CBFC: " U 2002 ‧ Animation/Family ‧ 1h 27m",
      List: "all animation",
    },
    {
      image: badboy,
      nameList: "Bad Boys for Life",
      CBFC: "A 2020 ‧ Action/Buddy cop ‧ 2h 4m",
      List: "all action",
    },
    {
      image: badman,
      nameList: "The Dark Knight Rises",
      CBFC: "U/A 2012 ‧ Action/Thriller ‧ 2h 45m",
      List: "all action",
    },
    {
      image: conjuring,
      nameList: "The Conjuring",
      CBFC: "A 2016 ‧ Horror/Thriller ‧ 2h 14m",
      List: "all horror",
    },
    {
      image: it,
      nameList: "It",
      CBFC: "A 2017 ‧ Horror/Thriller ‧ 2h 15m",
      List: "all horror",
    },
    {
      image: kunfu,
      nameList: "Kung Fu Panda",
      CBFC: "U 2008 ‧ Family/Comedy ‧ 1h 32m",
      List: "all animation",
    },
    {
      image: line,
      nameList: "The Lion King",
      CBFC: "U 1994 ‧ 1h 28m",
      List: "all animation",
    },
    {
      image: rata,
      nameList: "Ratatouille",
      CBFC: " 2007 ‧ 1h 51m",
      List: "all animation",
    },
    {
      image: nun,
      nameList: "The Nun",
      CBFC: "A 2018 ‧ Horror/Thriller ‧ 1h 39m",
      List: "all horror",
    },
    {
      image: aqp,
      nameList: "A Quiet Place",
      CBFC: "A 2018 ‧ Horror/Sci-fi ‧ 1h 30m",
      List: "all horror",
    },
    {
      image: con2,
      nameList: "The Conjuring 2",
      CBFC: "A 2016 ‧ Horror/Thriller ‧ 2h 14m",
      List: "all horror",
    },
    {
      image: lnis,
      nameList: "Insidious: The Red Door",
      CBFC: "A 2023 ‧ Horror/Mystery ‧ 1h 47m",
      List: "all horror",
    },
    {
      image: tmr,
      nameList: "The Mummy Returns",
      CBFC: "A 2001 ‧ Adventure/Action ‧ 2h 9m",
      List: "all horror",
    },
    {
      image: mist,
      nameList: "The Mist",
      CBFC: "A 2017 ‧ Horror ‧ 1 season",
      List: "all horror",
    },
    {
      image: exp,
      nameList: "The Expendables 3",
      CBFC: "U/A 2014 ‧ Action/Adventure ‧ 2h 6m",
      List: "all action",
    },
    {
      image: fast,
      nameList: "Fast X",
      CBFC: "U/A 2023 ‧ Action/Adventure ‧ 2h 21m",
      List: "all action",
    },
    {
      image: kingsman,
      nameList: "Kingsman: The Secret Service",
      CBFC: "A 2014 ‧ Action/Comedy ‧ 2h 9m",
      List: "all action",
    },
    {
      image: mm,
      nameList: "Mad Max: Fury Road",
      CBFC: "U/A 2015 ‧ Action/Adventure ‧ 2 hours",
      List: "all action",
    },
    {
      image: pri,
      nameList: "Prisoners",
      CBFC: "A 2013 ‧ Thriller/Crime ‧ 2h 33m",
      List: "all action",
    },
    {
      image: wol,
      nameList: "The Wolverine",
      CBFC: "U/A 2013 ‧ Action/Sci-fi ‧ 2h 6m",
      List: "all action",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      vcart: false,
      popupData: {},
    };
  }

  gethide = (value) => {
    this.setState({ vcart: value });
  };

  handleshow(obj) {
    this.setState({ vcart: true });
    this.setState({ popupData: obj });
  }

  render() {
    let movieList = this.movieimg.map((val) => {
      if (val.List.includes(this.props.get)) {
        return (
          <div className="hov"
            onClick={() => {
              this.handleshow(val);
            }}
          >
            <img src={val.image} alt="img" />
            <h3>{val.nameList}</h3>
            <p>{val.CBFC}</p>
          </div>
        );
      }
    });

    return (
      <div className="mov-cot">
        <div className="grid">{movieList}</div>
        {this.state.vcart && <Popup hidedata={this.gethide} popupdata={this.state.popupData} />}
      </div>
    );
  }
}

export default Gallery;
