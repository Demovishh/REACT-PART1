import Amazon_Price from "./amazon_price";
import "./Amazon_Card.css"

export default function Amazon_Card({title,idx}){
    let oldPrices = ["12,400", "11,900", "1600", "599"];
    let newPrices = ["8,999", "9000", "899", "278"];
    return(

        <div className="Amazon_Card"> 
            <h2>{title}</h2>
            <p>Description</p>
            <Amazon_Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
        </div>


    )
}