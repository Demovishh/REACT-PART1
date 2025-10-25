import Product from "./Product.jsx"

function ProductTab(){
    let options = ["hi-tech","fast","durable"];
    return(
        <div>
            <Product title="phone" price="15000" features ={options}/>
            <Product title="laptop"  price="200000" features ={options}/>
            <Product title="pen"  price="15" features ={options}/>
        </div>
    )
}

export default ProductTab;