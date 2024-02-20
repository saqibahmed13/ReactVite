import { useState } from "react"

export default function LikeButton() {

    const[colorValue, setColorValue] = useState(false);     // false cuz there should be no color 
    const styling = {color:"red"}

    let clicked = () => {
        setColorValue(!colorValue);         // opposite color 
    }
    return(
    <div>
        <p onClick={clicked}>
        {
            colorValue ?  <i class="fa-solid fa-heart" style = {styling} ></i> :<i class="fa-regular fa-heart"></i>
        }
        </p>
    </div>
    )
}