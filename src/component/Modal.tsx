import { useState } from "react";

const Modal = ()=>{
    const [isOpen,setIsOpen] = useState(false);
    const toggleModal = ()=>{
        setIsOpen(!isOpen);
    };
    return(
        <div>
            <button onClick = {toggleModal}>{isOpen?'close':'open'} Modal</button>
            
            {isOpen&&(
                <div className={"modal"}>
                    <div className={"modal-content"}>
                        <h2>title</h2>
                        <button onClick={toggleModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal;