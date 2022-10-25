import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import LoginForm from "../../components/Login/LoginForm";
import Register from "../../components/Login/Register/Register";
import Main from "../../layout/Main";

export const routes = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [

            {
              path: '/',
              element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/loginForm',
                element:<LoginForm></LoginForm>
            },
            {
                path:'register',
                element: <Register></Register>
            }
        ]
    
    
    }
])