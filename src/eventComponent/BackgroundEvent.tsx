const BackgroundEvent = ()  =>{
    
    const handleOverlayClick = ()=>{
        alert('backgroundClicked')
    }
    
    return(
        <div onClick={handleOverlayClick}></div>
    );
}

export default BackgroundEvent;