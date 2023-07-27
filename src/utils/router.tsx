import { createBrowserRouter } from "react-router-dom";
import SearchInput from "../component/SearchInput";
import UsingLocalStorage from "../component/UsingLocalStorage";
import GetData from "../fetch/GetData";
import Counter from "../component/Counter";
import SeeRecoilValue from "../component/SeeRecoilValue";
import LinkButton from "../component/LinkButton";
import SimplePageA from "../component/SimplePageA";
import SimplePageB from "../component/SimplePageB";
import SimplePageC from "../component/SimplePageC";
const router = createBrowserRouter([
    {
        path: '/',
        element: <LinkButton></LinkButton>,
        children:[
            {
                path:'/a',
                element:<SimplePageA></SimplePageA>
            },
            {
                path:'/b',
                element:<SimplePageB></SimplePageB>
            },
            {
                path:'/c',
                element:<SimplePageC></SimplePageC>
            }
        ]
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