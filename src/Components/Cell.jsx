import React, { useEffect } from 'react'
import '../index.css'

export const Cell = ({id,cell,cells,setCells,winningMessage,player,setPlayer,clear,setClear}) => {
useEffect(() => {
  const xElements = document.getElementsByClassName('x');
  const oElements = document.getElementsByClassName('o');

  // Convert HTMLCollection to an array and remove the class 'x' from each element
  Array.from(xElements).forEach((element) => element.classList.remove('x'));
  
  // Remove the class 'o' from each element
  Array.from(oElements).forEach((element) => element.classList.remove('o'));
}, [clear]);

    const handleClick = (e) => {
        if(!winningMessage){
        const firstChild = e.target.firstChild
        console.log(firstChild);
        
            let taken = firstChild.classList.contains('x') || firstChild.classList.contains('o')

            if(!taken){
                if(player === "x"){
                firstChild.classList.add('x')
                handleChange("x") 
                setPlayer("o")
                }
                 else if(player === "o"){
                firstChild.classList.add('o')
                handleChange("o") 
                setPlayer("x")
                }
              
            } 
        }
    }
    function handleChange  (val) {
        const nextCells = cells.map((cell,index)=>{
                if(id == index){
                    return val
                }
                else{
                    return cell
                }
        })
        
        setCells(nextCells)
    }

    
 
  return (
    <div className='w-14 h-10 rounded-md flex justify-center items-center border bg-blue-400'  onClick={handleClick}>
        <div id={cell} ></div>
    </div>
  )
}
