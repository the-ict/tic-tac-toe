import React from 'react'

export default function TicTacToe({ squares, onClick }) {
    console.log(squares);
    return (
        <div className='tic-tac-toe'>
            <div className='board'>
                {
                    squares.map((item, index) => (
                        <button onClick={() => onClick(index)} key={index}>
                            {item}
                        </button>
                    ))
                }
            </div>
        </div>
    )
}
