import React from "react";
function Displaycard(props) {
  return (
    <div className="col box-effect flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
            <img
              className="game-si"
              src={props.src}
              style={{ height: "250px", borderRadius: "3.5%" }}
              alt=".."
            />
        </div>
        <div className="flip-card-back">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
export default Displaycard;
