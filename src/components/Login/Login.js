import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ButtonGroup } from 'react-bootstrap';
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
        <div className='mb-5 d-block'>
           

           <div className=' mx-auto'>
            <ButtonGroup vertical className='w-25 d-flex justify-content-center align-items-center mx-auto'>
              <h2 className='my-5  text-danger'> Welcome to Code-Planner</h2>
               <h6 className='mb-3'>Log in with one of the following:</h6>
               <Button variant='primary mb-3  '><FaEnvelope className='text-dark'></FaEnvelope> <Link className='text-decoration-none text-dark fw-bold' to="/loginForm"> Login With Email</Link> </Button>
               <Button onClick={handleGoogleSignIn} variant="info mb-3 text-dark fw-bold"><FaGoogle></FaGoogle> Login With Google</Button>
               <Button onClick={handleGithubSignIn} variant='success  text-dark fw-bold'><FaGithub></FaGithub> Login With Github</Button>
               <h6 className='my-3'> Do not have an account.?? Please <Link to='/register'>Register</Link> </h6>
         
            </ButtonGroup>
            
        
           </div>

        </div>
    );
};

export default Login;