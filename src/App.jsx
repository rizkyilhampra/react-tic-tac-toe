/* eslint-disable react/prop-types */
import { useState } from "react";
import Board from "./components/Board";

export default function App() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquare = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    const moves = history.map((step, move) => {
        const desc = move > 0 ? `Go to move #${move}` : "Go to game start";
        return (
            <li key={move}>
                <button
                    onClick={() => {
                        jumpTo(move);
                    }}
                    type="button"
                >
                    {desc}
                </button>
            </li>
        );
    });

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    function handlePlay(nextSquare) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquare];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquare}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    );
}
