import React from "react";

import BirdContainer from "../containers/BirdContainer";
import PillarContainer from "../containers/PillarContainer";
import Score from "./Score";
import GameOver from "./GameOver";
import StartScreen from "./StartScreen";

function App(props) {
	if (props.isGameStarted) {
		return (
			<div className='position-relative'>
				<BirdContainer isGameOver={props.isGameOver}
					handleGameOver={props.handleGameOver}
					handleScore={props.handleScore} />
				<PillarContainer isGameOver={props.isGameOver} />
				<Score score={props.score} user={props.user} />
				{props.isGameOver && <GameOver />}
			</div>
		);
	} else {
		return <StartScreen />;
	}
}

export default App;