import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup} from 'react-bootstrap';
import  Button from 'react-bootstrap/Button';
import { FaGoogle, FaGithub,FaEnvelope } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';



const Login = () => {

    const {providerLogin} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
     const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from, {replace:true});
            console.log(user);
        })
        .catch(error => console.error('error', error))

    }

    const handleGithubSignIn = () =>{
            providerLogin(githubProvider)
            .then(result =>{
                const user = result.user;
                navigate(from, {replace:true});
                console.log(user)
            })
            .catch(error =>{
                console.error('error', error);
            })
    }


    return (
    
         <div className='mb-5 d-block py-5 shadow-lg rounded container bg-info '>
           

           <div className=' mx-auto bg-light  my-5 py-5 shadow-lg rounded'>
            <ButtonGroup vertical className='w-25 d-flex justify-content-center align-items-center mx-auto'>
              <h2 className='mb-2  text-danger py-3'>Welcome to C.Planner</h2>
               <h6 className='mb-3'>Log in with one of the following:</h6>
               <Button variant='outline-danger ' className='mb-3'><Link className='text-decoration-none text-dark fw-bold' to="/loginForm">  <FaEnvelope className='text-dark'></FaEnvelope> Login With Email </Link></Button>
               <Button onClick={handleGoogleSignIn} variant="warning mb-3 text-dark fw-bold"><FaGoogle></FaGoogle> Login With Google</Button>
               <Button onClick={handleGithubSignIn} variant='success  text-dark fw-bold'><FaGithub></FaGithub> Login With Github</Button>
               <h6 className='my-3 text-dark'> Do not have an account.?? Please <Link to='/register'>Register</Link> </h6>
         
            </ButtonGroup>
            
        
           </div>

        </div>
      
    );
};

export default Login;