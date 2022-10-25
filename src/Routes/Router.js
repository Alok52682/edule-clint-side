import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: ErrorPage } = require("../Pages/Shared/ErrorPage");

const router = createBrowserRouter([{
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/home',
            element: <Home />
        },
        {
            path: '/courses',
            element: <Courses />
        },
        {
            path: '/blog',
            element: <Blog />
        },
    ]
}])

export default router;