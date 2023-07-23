/* eslint-disable react/prop-types */
import Square from "./Square.jsx";
import calculateWinner from "../utils/calculateWinner";

export default function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) return;

        const nextSquare = squares.slice();

        nextSquare[i] = xIsNext ? "X" : "O";
        onPlay(nextSquare);
    }

    const winner = calculateWinner(squares);
    let status = "";
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? "X" : "O"}`;
    }

    const row = [0, 1, 2];

    return (
        <>
            <div>{status}</div>
            {row.map((i) => (
                <div className="row" key={i}>
                    {row.map((j) => (
                        <Square
                            key={i * 3 + j}
                            value={squares[i * 3 + j]}
                            onClickSquare={() => handleClick(i * 3 + j)}
                        />
                    ))}
                </div>
            ))}
        </>
    );
}
