import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/CoursePage/Category/Category";
import CoursePage from "../../components/CoursePage/CoursePage/CoursePage";
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
              path: '/coursePage',
              element: <CoursePage></CoursePage>,
              loader: () =>fetch('http://localhost:5000/courses-categories')
           
            },
            {
                path:'/category/:id',
                element:<Category></Category>
              
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
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'blog',
                element: <Blog></Blog>
            }
        ]
    
    
    }
])