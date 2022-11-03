import React, {ReactElement, ReactNode, useState} from 'react';
import './App.css';
import Sapper from "./components/sapper/Sapper";

function App() {

  let randoNumber: number = 0

  const createItems = () => {
    const sappers = [];
    randoNumber = (Math.floor(Math.random() * 36))
    for (let i = 0; i < 36; i++) {
      const sapper = {
        hasItem: false,
        clicked: false
      }

      if (i === randoNumber) {
        sapper.hasItem = true
      }
      sappers.push(sapper)
    }

    return sappers
  }

  const [items, setItems] = useState(createItems())
  const [showItems , setShowItems] =  useState(false)

  let sapperList: React.ReactNode = null;


  const resetSapper = () => {
    randoNumber = (Math.floor(Math.random() * 36))
    const itemsCopy = [...items]
    let indexItems = {...items[randoNumber]}
    indexItems.hasItem = false
    itemsCopy[randoNumber] = indexItems
    indexItems = {...items[randoNumber]}
    indexItems.hasItem = true
    itemsCopy[randoNumber] = indexItems
    setItems(itemsCopy)
  }



  const clickAttempt = () => {
    setShowItems(!showItems)
    console.log('lklk')
  }


  let Attempts = 0;


  sapperList = items.map((list , index) => (
      <Sapper key={index}  showItem={showItems} sapperList={clickAttempt}/>
  ))



  return (
    <div className="App">
      <div className="sapperTwo">
        {sapperList}
      </div>
      <button onClick={resetSapper}>Reset</button>
    </div>
  );
}

export default App