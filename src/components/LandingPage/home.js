import React from "react";
import anim from "../../assets//images/anim.gif";

function Homepg() {
  return (
    <div className="my-container " id="homepage">
      <img className="startImg banner-blur" src={anim} width="100%" />
      <div class="head1 col-sm-12 col-md-12 col-lg-12 col-xl-12 pt-2">
        <h3 class="hd1 pt-2 ">PLAY ONLINE GAMES,WIN REWARDS</h3>
      </div>
    </div>
  );
}

export default Homepg;
