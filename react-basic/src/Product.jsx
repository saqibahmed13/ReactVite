

function Product({title,price,features}){
    const list = features.map((singleValue)=> <li>{singleValue}</li>)
    return (
        <div>
            <h1>{title}</h1>
            <h5>Price:{price}</h5>
            <p> {list} </p>
        </div>
    );
}

export default Product;