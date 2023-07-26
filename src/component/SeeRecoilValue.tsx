import { useRecoilState } from "recoil";
import { counterState } from "../utils/atom";

const SeeRecoilValue = ()=>{
    const [counter,setCounter] = useRecoilState(counterState);
    return(
        <div>{counter}</div>
    );
}

export default SeeRecoilValue;