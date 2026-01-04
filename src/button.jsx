function BtnClick(){
    console.log("Button Clicked!");
}

function HandleMouseOver(){
    console.log("Pointed the mouse on the para")
}

function HandleDblClick(){
    console.log("You double clicked the button")
}

export default function Button(){
    return(
        <div>
            <button onClick={BtnClick}>Click Here!</button>

            <p onMouseOver={HandleMouseOver}>Learning react js :)</p>

            <button onDoubleClick={HandleDblClick}>Click me !</button>
        </div>
    )
}