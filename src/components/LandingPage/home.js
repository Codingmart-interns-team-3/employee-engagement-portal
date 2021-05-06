import React from "react";
import { useHistory } from "react-router-dom";
import anim from "../../assets//images/anim.gif";

function Homepg() {
  let history = useHistory();
  return (
    <div className="my-container " id="homepage">
      <img className="startImg banner-blur" src={anim} width="100%" />
      <div class="head1 col-sm-12 col-md-12 col-lg-12 col-xl-12 pt-2">
        <h3 class="hd1 pt-2 ">PLAY ONLINE GAMES,WIN REWARDS</h3>
        <div className='hd1 btn btn-outline-light' onClick={()=>history.push('/games')}>Play Now</div>
      </div>
    </div>
  );
}

export default Homepg;
