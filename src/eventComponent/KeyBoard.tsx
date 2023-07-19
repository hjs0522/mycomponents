import React from "react";

const KeyBoard = () =>{
    
    const handleKeyDown = (e:React.KeyboardEvent)=>{
        //키를 누를 때 발생
        alert(e.key)
    }
    
    const handleKeyUp=(e:React.KeyboardEvent)=>{
        //키를 놓을 때 발생
        alert(e.key)
    }
    return(
        <input onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}></input>
    );
}

export default KeyBoard;