import { Link,Outlet } from "react-router-dom";

const LinkButton = () =>{
    return(
        <div>
            <button><Link to={'/a'}>A</Link></button>
            <button><Link to={'/b'}>B</Link></button>
            <button><Link to={'/c'}>C</Link></button>
            <Outlet></Outlet>
        </div>
    );
}

export default LinkButton;