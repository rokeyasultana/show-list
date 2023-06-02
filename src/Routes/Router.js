import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import HomeScreen from "../Screen/HomeScreen";
import ShowDetails from "../components/ShowDetail";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomeScreen/>
            },
            {
                path: `/details/:id`,
                element: <ShowDetails/>,
            }
        ]
    },

])
export default routes;