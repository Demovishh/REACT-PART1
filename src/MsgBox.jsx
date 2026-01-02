

function MsgBox({userName,textColor}) {
    let colors = {color : textColor}
    return <>
        
        <h1 style={colors} >Hello {userName}!</h1>
    </>
}

export default MsgBox;