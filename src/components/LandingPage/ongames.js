import React from "react";
import Displaycard from "./displaycard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import snake from "../../assets/images/snake.png";
import tictactoe from "../../assets/images/tictactoe.jpeg";
import breakout from "../../assets/images/breakout.jpg";
import flappy from "../../assets/images/flappy.jpg";
import rock from "../../assets/images/rock.jpg";

import game from '../../service/gameList';

var res = {
  0: {
    items: 1
  },
  450: {
    items: 1
  },
  600: {
    items: 3
  },
  1000: {
    items: 3
  },
  1200: {
    items: 5
  }
};
function Gamestoplay(props) {
  console.log(game);
  return (
    <div className="my-5 pt-3 ml-4" id="gamestoplay">
      <h4 className="myfont">Games</h4>
      <br></br>
      <OwlCarousel
        className="owl-theme nav-btn"
        loop={true}
        startPosition={5}
        slideBy={4}
        margin={20}
        nav={true}
        dots={false}
        autoplay={false}
        items={4}
        navText={[
          "<span class='material-icons md-36 mycolor myborder-left'>keyboard_arrow_left</span>",
          "<span class='material-icons md-36 mycolor myborder-right'>keyboard_arrow_right</span>"
        ]}
        responsive={res}
      >
        {
          game.map((e)=>{
          return (
          <Displaycard 
            src={e.logo}
            description={e.description}
            location={e.url}
          />)})
        }
      </OwlCarousel>
    </div>
  );
}

export default Gamestoplay;
