import React from 'react';
import './Sapper.css'
interface Props {
    sapperList: React.MouseEventHandler
    showItem: boolean
}
const Sapper: React.FC<Props> = ({sapperList , showItem}) => {
    const sapperStyle:  React.CSSProperties = {
        margin: '1px',
        width: '40px',
        height: '40px',
        background: 'black',
        display: 'inline-block',
    }

    if(showItem === true){
        sapperStyle.background = 'red'
    }

    return (
        <div onClick={sapperList} style={sapperStyle}>
            <span>O</span>
        </div>
    );
};

export default Sapper;