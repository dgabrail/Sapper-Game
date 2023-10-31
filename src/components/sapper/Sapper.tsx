import React from 'react';
import { Cell } from '../../types';
import './Sapper.css'
interface Props {
    changeStyle: (changeCell: Cell) => void 
    cell: Cell
}
const Sapper: React.FC<Props> = ({cell , changeStyle}) => {
    return (
        <div onClick={() => changeStyle(cell)} className={cell.style}>
            <span>{cell.bomb}</span>
        </div>
    );
};

export default Sapper;