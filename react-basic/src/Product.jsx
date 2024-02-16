

function Product({title,price,features}){
    let color = {backgroundColor: price>30000 ? "yellow" : ""}
    const list = features.map((singleValue)=> <li>{singleValue}</li>)
    return (
        <div style={color}>
            <h1>{title}</h1>
            <h5>Price:{price}</h5>
            <p> {list} </p>
        </div>
    );
}

export default Product;