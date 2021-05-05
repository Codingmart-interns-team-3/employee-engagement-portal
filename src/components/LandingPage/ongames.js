import React from "react";
import Displaycard from "./displaycard";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./styles.css";
import snake from "../../assets/images/snake.png";
import tictactoe from "../../assets/images/tictactoe.jpeg";
import breakout from "../../assets/images/breakout.jpg";
import flappy from "../../assets/images/flappy.jpg";
import rock from "../../assets/images/rock.jpg";
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
        <Displaycard
          src={snake}
          description="The game continues until the snake 'dies'. A snake dies by either (1) running into the edge of the board, or (2) by running into its own tail. The final score is based on the number of apples eaten by the snake."
          location=""
        />
        <Displaycard
          src={breakout}
          description="A layer of bricks lines the top third of the screen and the goal is to destroy them all by repeatedly bouncing a ball off a paddle into them."
          location=""
        />
        <Displaycard
          src={tictactoe}
          description="A game in which two players alternately put Xs and Os in compartments of a figure formed by two vertical lines crossing two horizontal lines and each tries to get a row of three Xs or three Os before the opponent does."
          location=""
        />
        <Displaycard
          src={flappy}
          description="A side-scroller where the player controls a bird, attempting to fly between columns of green pipes without hitting them."
          location=""
        />
        <Displaycard
          src={rock}
          description="A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it"
          location=""
        />
      </OwlCarousel>
    </div>
  );
}

export default Gamestoplay;
