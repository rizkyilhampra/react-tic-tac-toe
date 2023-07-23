/* eslint-disable react/prop-types */
export default function Square({ value, onClickSquare }) {
    return (
        <button className="square" onClick={onClickSquare}>
            {value}
        </button>
    );
}
