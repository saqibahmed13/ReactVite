import { useState } from "react"

export default function LudoButton(){
    const[moves,setMoves] = useState({blue:0,yellow:0,green:0,red:0})
    const[arr,setArr] = useState(["oldArray"]);

    const updateBlue =()=>{
        setMoves({...moves, blue: moves.blue + 1});
        setArr([...arr,"newArray"])
    } 
    const updateYellow =()=>{
        setMoves({...moves, yellow: moves.yellow + 1});
    }
    const updateGreen =()=>{
        setMoves({...moves, green: moves.green + 1});
    }
    const updateRed =()=>{
        setMoves({...moves, red: moves.red + 1});
    }

    // we should use callback function when prevValue is depended on newValue 

    // const updateBlue = ()=>{
    //     setMoves((prevMoves)=>{
    //         return{...prevMoves, blue:moves.blue+1}
    //     })
    // }

    return(
        <div>
            <p>Game Begin!</p>
            <div className="Board">
                <p>Array={arr}</p>
                <p > Blue moves = {moves.blue}</p>
                <button style={{background:"blue"}} onClick={updateBlue}>+1</button>

                <p>Yellow moves = {moves.yellow}</p>
                <button style={{background:"yellow"}} onClick={updateYellow}>+1</button>

                <p>Green moves ={moves.green}</p>
                <button style={{background:"green"}} onClick={updateGreen}>+1</button>

                <p>Red moves = {moves.red}</p>
                <button style={{background:"red"}} onClick={updateRed}>+1</button>

            </div>
        </div>
    );
}