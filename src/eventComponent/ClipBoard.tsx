const ClipBoard = () =>{
    const handleCopy = ()=>{
        alert('copied')
    }
    const handlePaste = ()=>{
        alert('paste')
    }
    const handleCut =()=>{
        alert('cut')
    }
    return(
        <input onCopy={handleCopy} onPaste={handlePaste} onCut={handleCut}></input>
    );
}

export default ClipBoard;