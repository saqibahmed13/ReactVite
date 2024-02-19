function SayHello(){
    console.log("Hi you clicked me");
}

export default function ButtonClick(){
    return(
    <button onClick={SayHello}> Click me!</button>
    )
}