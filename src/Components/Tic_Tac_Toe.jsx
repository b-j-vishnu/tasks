import React, { useEffect, useState } from 'react'
import { Cell } from './Cell'

const Tic_Tac_Toe = () => {
    const [cells,setCells] = useState(["","","","","","","","",""])
    const [winningMessage,setWinningMessage] = useState(null) 
    const [player,setPlayer] = useState('x') 
    const [clear,setClear] = useState(false) 

    useEffect(()=>{
        checkScores()
        console.log(cells);
        
    },[cells])
    

    function checkScores(){
const winningScores = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
]        
    let winnerFound = false;
     winningScores.forEach((win)=>{
         let xwins = win.every((item)=>{
            return cells[item] == "x"
        })
        if(xwins){
            winnerFound = true
            setWinningMessage('x won')
            setTimeout(()=>{alert('x won')},100)
            return
        }
        
    })
    winningScores.forEach((win)=>{
         let owins = win.every((item)=>{
            return cells[item]  == "o"
        })
        if(owins){
            winnerFound = true
            setWinningMessage('o won')

                        setTimeout(()=>{alert('o won')},100)

            return
        }
        
    })
    }

    const handleReset = () => {
        setCells(["","","","","","","","",""])
        setWinningMessage(null)
        setPlayer('x')
        setClear(!clear)
    }
  return (
    <div className='w-full h-[92.5vh] flex flex-col justify-center items-center bg-gray-200'>
    <section className='w-1/4 flex justify-center flex-wrap'>
        {
            cells.map((cell,index)=>(
                <Cell 
                    key={index}
                    id={index}
                    cell={cell}
                    cells={cells}
                    setCells={setCells}
                    player={player}
                    setPlayer={setPlayer}
                    winningMessage={winningMessage}
                    clear={clear}
                    setClear={setClear}
                />
            ))
        }
        </section>
        <button onClick={handleReset} className='my-6 px-5 text-lg rounded-lg py-1 bg-yellow-300'>reset</button>
    </div>
  )
}

export default Tic_Tac_Toe 