import Product from "./Product.jsx";

function ProductList(){
    return (
        <div>
            <Product title="Laptop" price="30000"/>
            <Product title="phone" price="20000"/>
            <Product title="accessories" price="10000"/>
        </div>
    );
}

export default ProductList;