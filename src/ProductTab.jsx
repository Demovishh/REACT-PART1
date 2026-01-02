import Product from "./Product.jsx"

// function ProductTab(){
//     let options = ["hi-tech","fast","durable"];
//     return(
//         <div>
//             <Product title="phone" price="15000" features ={options}/>
//             <Product title="laptop"  price="200000" features ={options}/>
//             <Product title="pen"  price="15" features ={options}/>
//         </div>
//     )
// }

// export default ProductTab;




function ProductTab(){
  let options= ["fast","durable","reliable"];
    return <>
    <Product title="pen" price="10" features={options}/>
    <Product title="laptop" price="50000" features={options}/>
    <Product title="phone" price="20000" features={options}/>
  </>
}

export default ProductTab;