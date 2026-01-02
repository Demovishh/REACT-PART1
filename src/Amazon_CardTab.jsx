import Amazon_Card from "./Amazon_Card";

export default function Amazon_CardTab(){
    let styles = {
        display:"flex",
    }
    return(

        <div style={styles}>
            <Amazon_Card title="Logitech MX Master" idx={0} />
            <Amazon_Card title= "Apple Pencil (2nd gen)" idx={1}/>
            <Amazon_Card title= "Zebronics Zeb Transformer" idx={2}/>
            <Amazon_Card title= "Petronics Toad 23" idx={3}/>
        </div>
    )
}