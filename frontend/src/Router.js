import { Navigate } from "react-router-dom";
import AppLayout from "./layouts/app-layout/AppLayout";
import Dashboard from "./layouts/dashboard-layout/Dashboard";
import Home from "./pages/Home";
import { SignIn } from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up";
import Step1 from "./pages/sign-up/Step1";
import Step2 from "./pages/sign-up/Step2";
import Step3 from "./pages/sign-up/Step3";
import Step4 from "./pages/sign-up/Step4";

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
        children: [
            { path: "", element: <Navigate to="1" /> },
            { path: "1", element: <Step1 /> },
            { path: "2", element: <Step2 /> },
            { path: "3", element: <Step3 /> },
            { path: "4", element: <Step4 /> },
            { path: "*", element: <Navigate to="1" /> },
        ],
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [{ path: "", element: <div>dashboard</div> }],
    },
    { path: "*", element: <Navigate to="/" /> },
];
export default routes;
