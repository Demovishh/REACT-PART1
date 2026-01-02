
export default function Amazon_Price({oldPrices,newPrices}){
    let oldStyles = {
        textDecorationLine : "line-through"
    }
    let newStyles = {
        fontWeight : "bold"
    }
    let styles ={
        backgroundColor :"#e0c367",
        height: "35px",
        borderBottomLeftRadius : "20px",
        borderBottomRightRadius : "20px"
    }
    return (

        <div style={styles}>
            <span style={oldStyles}>{oldPrices}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyles}>{newPrices}</span>
        </div>
    )
}