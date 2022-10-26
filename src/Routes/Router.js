import Main from "../Layouts/Main";
import Blog from "../Pages/Blog/Blog";
import AllCourses from "../Pages/Courses/AllCourses";
import CourseDetails from "../Pages/Courses/CourseDetails";
import Courses from "../Pages/Courses/Courses";
import Purchase from "../Pages/Courses/Purchase";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

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
            element: <Courses />,
            children: [
                {
                    path: '/courses',
                    loader: async () => fetch(`https://b610-lerning-platform-server-side-sigma.vercel.app/courses`),
                    element: <AllCourses />
                },
                {
                    path: '/courses/:id',
                    loader: async ({ params }) => fetch(`https://b610-lerning-platform-server-side-sigma.vercel.app/courses/${params.id}`),
                    element: <CourseDetails />
                },
                {
                    path: '/courses/:id/purchase',
                    loader: async ({ params }) => fetch(`https://b610-lerning-platform-server-side-sigma.vercel.app/courses/${params.id}`),
                    element: <PrivateRoute><Purchase /></PrivateRoute>
                }
            ]
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/login',
            element: <LogIn />
        },
        {
            path: '/register',
            element: <Register />
        },
        {
            path: '/blog',
            element: <Blog />
        },
        {
            path: '/faq',
            element: <Faq />
        }
    ]
}])

export default router;