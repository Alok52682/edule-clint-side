const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layouts/Main");
const { default: ErrorPage } = require("../Pages/Shared/ErrorPage");

const router = createBrowserRouter([{
    path: '/',
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [

    ]
}])

export default router;