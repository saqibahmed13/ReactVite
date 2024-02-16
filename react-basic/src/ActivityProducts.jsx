import Price from "./ActivityPrice";


export default function ProductCard({title,idx}){
    let oldPrices = ["12,300" , "11,099" , "989", "567"];
    let newPrices = ["11,002", "10,002", "654", "437"];
    let desc = ["8000 DPI", "surface", "designed pad" , "best laptop"];

return(
<div>
    <p>{title}</p>
    <p>{desc[idx]}</p>
    <Price oldPrice = {oldPrices[idx]} newPrice={newPrices[idx]}/>
</div>
);

}