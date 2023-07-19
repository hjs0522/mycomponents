const Focus = ()=>{
    const handleFocus = ()=>{
        alert('focus')
    }
    
    const handleBlur = ()=>{
        alert('blur')
    }
    
    return(
        <input onFocus={handleFocus} onBlur={handleBlur}></input>
    )
}

export default Focus;