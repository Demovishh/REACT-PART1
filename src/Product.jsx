import "./Product.css"


// function Product({ title,price,features }){

//     // const list = features.map((option) => <li>{option}</li>)
    
//     return (
//         <div className="Product">
//             <h2>{title}</h2>
//             <h5>Price-{price}</h5>

//             {/* <p>{features.map((option) => <li>{option}</li>)}</p> */}

//             {price>30000? <p>Discount of 5%</p> : null }
//         </div>
//     )
// }
// export default Product;


function Product({title,price,features}){

    let styles = { backgroundColor : price > 30000 ? "yellow" : ""};
    return <div className="Product" style={styles}>

        <h2>Product: {title}</h2>
        <h4>Price: {price}</h4>

        {price > 30000 ? <p>"5% Discount"</p> : ""}

        <p>{features.map( (option) => <li> {option}</li>)}</p>
   </div>
}

export default Product; 