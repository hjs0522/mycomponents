import { createBrowserRouter } from "react-router-dom";
import SearchInput from "./component/SearchInput";
import GetData from "./fetch/GetData";

const router = createBrowserRouter([
    {
        path: '/',
        element: <GetData></GetData>,
    },
    {
        path: '/search',
        element:<SearchInput></SearchInput>
    }
])

export default router;