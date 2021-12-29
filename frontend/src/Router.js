import AppLayout from "./layouts/app-layout/AppLayout";
import Dashboard from "./layouts/dashboard-layout/Dashboard";
import Home from "./pages/Home";
import { SignIn } from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up";

const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/news", element: <div>Tin tuc</div> },
            { path: "/news/:id", element: <div>Chi tiet thong bao</div> },
            { path: "/forms", element: <div>Bieu mau</div> },
            { path: "/login", element: <SignIn /> },
            { path: "/forgot-password", element: <div>Quen mat khau</div> },
            {
                path: "/member-information",
                element: <div>Danh sach thanh vien</div>,
            },
            {
                path: "/member-information/:id",
                element: <div>Chi tiet thanh vien</div>,
            },
        ],
    },
    {
        path: "/sign-up",
        element: <SignUp />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [{ path: "", element: <div>dashboard</div> }],
    },
];
export default routes;
