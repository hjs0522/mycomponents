import React from "react";

const Change = ()=>{
    const handleOnChange = (e:React.ChangeEvent)=>{
        console.log(e.target.nodeValue)
    }
    return(
        <input onChange={handleOnChange}></input>
    );
}

export default Change