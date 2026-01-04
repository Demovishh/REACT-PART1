function HandleSubmit(event){
    console.log("Form Submitted");
    event.preventDefault();
}

export default function Form(){
    return(
        <form>

            <input placeholder="type here"/>
            <button onClick={HandleSubmit}>Submit</button>
            
        </form>
    )
}