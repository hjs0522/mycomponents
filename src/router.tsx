import { createBrowserRouter } from "react-router-dom";
import SearchInput from "./component/SearchInput";
import UsingLocalStorage from "./component/UsingLocalStorage";
import GetData from "./fetch/GetData";

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
    }
])

export default router;