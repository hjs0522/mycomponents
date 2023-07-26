import { createBrowserRouter } from "react-router-dom";
import SearchInput from "../component/SearchInput";
import UsingLocalStorage from "../component/UsingLocalStorage";
import GetData from "../fetch/GetData";
import Counter from "../component/Counter";
import SeeRecoilValue from "../component/SeeRecoilValue";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GetData></GetData>,
    },
    {
        path: '/search',
        element:<SearchInput></SearchInput>
    },
    {
        path: '/UsingLocalStorage',
        element:<UsingLocalStorage></UsingLocalStorage>
    },
    {
        path:'counter',
        element:<Counter></Counter>
    },
    {
        path:'seeRecoil',
        element:<SeeRecoilValue></SeeRecoilValue>
    }
    
])

export default router;