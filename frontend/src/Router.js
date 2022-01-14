import { Navigate } from "react-router-dom";
import AppLayout from "./layouts/app-layout/AppLayout";
import DashboardLayout from "./layouts/dashboard-layout/Dashboard";
import ChangePassword from "./pages/change-password/ChangePassword";
import Home from "./pages/Home";
import MyInfo from "./pages/my-info/MyInfo";
import MyTopic from "./pages/my-topic/MyTopic";
import News from "./pages/news/News";
import { SignIn } from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up";
import Step1 from "./pages/sign-up/Step1";
import Step2 from "./pages/sign-up/Step2";
import Step3 from "./pages/sign-up/Step3/";
import Step4 from "./pages/sign-up/Step4";
import StepFinal from "./pages/sign-up/StepFinal";
import TopicRegister from "./pages/topic-register/TopicRegister";

const routes = [
    {
        path: "/",
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/news", element: <News /> },
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
        element: (
            <SignUp>
                <Step4 />
                <Step1 />
                <Step2 />
                <Step3 />
                <StepFinal />
            </SignUp>
        ),
    },
    {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
            { path: "topic-register", element: <TopicRegister /> },
            { path: "change-password", element: <ChangePassword /> },
            { path: "my-topic", element: <MyTopic /> },
            { path: "my-info", element: <MyInfo /> },
        ],
    },
    { path: "*", element: <Navigate to="/" /> },
];
export default routes;
