import React, { useEffect, useState } from 'react'
import { Cell } from '../../types';
import Sapper from '../sapper/Sapper';

const Field = () => {
  const [cells, setCells] = useState<Cell[]>([]);
  const [attempts, setAttempts] = useState<number>(0);
  const [numbers, setNumbers] = useState<number>(0);

  if (cells.length === 0) {
    for (let i = 0; i < 36; i++) {
      const cell: Cell = { bomb: '', style: 'SapperBlack' };
      cells.push(cell);
    }

    let numberBomb = 0;
    cells.map(cell => {
      if (cell.bomb === 'O') {
        numberBomb++;
      }
    })

    if (numberBomb === 0) {
      cells[Math.floor(Math.random() * 36)].bomb = 'O';
    }
  }

  const changeStyle = (changeCell: Cell) => {
    setCells(prev => {
      const changePrev = [...prev];
      changePrev[changePrev.indexOf(changeCell)].style = 'SapperWite';
      return changePrev
    })

    if (numbers === 0) {
      setAttempts(prev => {
        prev++
        return prev
      })
    }
    if (changeCell.bomb === 'O') {
      setNumbers(prev => {
        prev++
        return prev
      })
    }

  }

  const reset = () => {
    setCells([]);
    setAttempts(0);
    setNumbers(0);
  }


  return (
    <div className='Field'>
      {cells.map(cell => (
        <Sapper cell={cell} changeStyle={changeStyle} />
      ))}
      <button onClick={reset}>Reset</button>
      <div>{attempts}</div>
    </div>
  )
}

export default Field
