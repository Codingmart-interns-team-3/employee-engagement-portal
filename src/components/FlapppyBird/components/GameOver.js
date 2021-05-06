import React from "react";
import { Link, useHistory } from "react-router-dom";


import "../css/gameOver.css";

function GameOver(props) {
    let history = useHistory();
    return (
        <div id="gameOver">
            <div>Game Over!</div>
            <button onClick={()=>window.location.reload()} >Restart</button>
        </div>
    );
}

export default GameOver;