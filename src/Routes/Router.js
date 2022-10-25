import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
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
            loader: async () => fetch(`https://b610-lerning-platform-server-side-sigma.vercel.app/courses`),
            element: <Courses />
        },
        {
            path: '/blog',
            element: <Blog />
        },
    ]
}])

export default router;