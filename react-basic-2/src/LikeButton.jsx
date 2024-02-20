import { useState } from "react"

export default function LikeButton() {

    const[colorValue, setColorValue] = useState(false);     // false cuz there should be no color 

    let clicked = () => {
        setColorValue(!colorValue);         // opposite color 
    }
    return(
    <div>
        <p onClick={clicked}>
        {
            colorValue ?  <i class="fa-solid fa-heart"></i> :<i class="fa-regular fa-heart"></i>
        }
        </p>
    </div>
    )
}