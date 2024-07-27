import { createBrowserRouter } from "react-router-dom";
import { UserLogin } from "../pages/Auth/userLogin";
import { UserRegistration } from "../pages/Auth/userRegistration";
import Home from "../pages/User/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/userLogin",
        element: <UserLogin />,
    },
    {
        path: "/userRegistration",
        element: <UserRegistration />
    }
])