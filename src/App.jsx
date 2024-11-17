import React from 'react'
import { useState } from "react"
import TicTacToe from './components/TicTacToe'

export default function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [winner, setWinner] = useState(null)
  const [isXNext, setIsXNext] = useState(false)


  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (index) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquaresArray = squares.slice()
    newSquaresArray[index] = isXNext ? "X" : "O";
    setSquares(newSquaresArray)
    setIsXNext(!isXNext);

    const gameWinner = calculateWinner(newSquaresArray)
    if (gameWinner) {
      setWinner(gameWinner);
    }
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null))
    setWinner(null)
    setIsXNext(true)
  }


  return (
    <div className='app'>
      <h1>Tic Tac Toe</h1>
      <TicTacToe squares={squares} onClick={handleClick} />
      {
        winner ? (
          <div className='winner'>
            <p>Winner: {winner}</p>
            <button onClick={resetGame()}>Play again</button>
          </div>
        ) : (
          <p>Next player: {isXNext ? "X" : "O"}</p>
        )
      }
    </div>
  )
}
