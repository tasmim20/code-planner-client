import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Category from "../../components/CoursePage/Category/Category";
import PremiumPage from "../../components/CoursePage/CourseDetails/PremiumPage/PremiumPage";
import CoursePage from "../../components/CoursePage/CoursePage/CoursePage";
import Home from "../../components/Home/Home";
import Login from "../../components/Login/Login";
import LoginForm from "../../components/Login/LoginForm";
import Register from "../../components/Login/Register/Register";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
                element:<Category></Category>,
                loader: ({params}) => fetch(`http://localhost:5000/category/${params.id}`)
              
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/premiumPage',
                element:<PrivateRoute><PremiumPage></PremiumPage></PrivateRoute>
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
            },
            {
                path:'*',
                element: <div> <h2>404</h2> <p>This route not found</p></div>
            }
        ]
    
    
    }
])