import Amazon_Price from "./amazon_price";
import "./Amazon_Card.css"

export default function Amazon_Card({title,idx}){
    let oldPrices = ["12,400", "11,900", "1,600", "599"];
    let newPrices = ["8,999", "9,000", "899", "278"];
    let description = [["8000 DPI" , "5 Programmbale buttons"],
                       ["Intutive surface" ,"Desinged for Ipad Pro"], 
                       ["Designed for Ipad Pro" ,"Intutive Surface"], 
                       ["Wireless", "optical Orientation"]];

    return(

        <div className="Amazon_Card"> 

            <h2>{title}</h2>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Amazon_Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]}/>
        </div>


    )
}