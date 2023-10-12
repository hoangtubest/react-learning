import React, { useReducer } from "react";
import Board from "./Board";
import "./GameStyles.css";
import { calculateWinner } from "../../helpers";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};

// immutable
// [...array], {...obj}
// deep copy JSON.parse(JSON.stringify(obj))
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log("gameReducer ~ nextState:", nextState);
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }

    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};

const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  // const [state, setState] = useState({
  //   board: Array(9).fill(null),
  //   xIsNext: true,
  //   name: "demo",
  // });

  // Reducer
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const winner = calculateWinner(state.board);

  const handleClick = (index) => {
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
  };

  const handleResetGame = () => {
    dispatch({
      type: "RESET",
    });
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner is {winner}</div>}
      <button className="game-reset" onClick={handleResetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default Game;
