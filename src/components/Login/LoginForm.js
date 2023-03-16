import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

function LoginForm() {


    const [error, setError] = useState('');

   const {signIn} = useContext(AuthContext);

   const navigate = useNavigate();
  const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

      signIn(email, password)
      .then(result =>{
        const user = result.user;
        console.log(user);
        form.reset();
        setError('');
        navigate(from, {replace:true});
      })
      .catch(error =>{
        console.error('error', error)
        setError(error.message);
      })
   }

  return (
<div style={{width:"20rem"}} className='border  shadow-lg container pb-4  mb-5 mt-5 mx-auto'>
<Form onSubmit={handleSubmit} className='   mt-5 mx-auto'>
    <h4 className='fw-bold text-center pb-4 pt-2'>Login Now.</h4>
<Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='lg:w-50' type="email" name='email' placeholder="Enter email" required />
     
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
    
      </Form.Group>
      <Button variant="info" type="login" className='px-5 mb-3'>
        Login
      </Button>
      
      <Form.Text className=" fw-bold d-block  mb-3">
       <p>{error}</p>
        <h6 className=' mb-3 pb-2'> Don't have any account .?? <Link to='/register'>Register</Link> </h6>
      </Form.Text>
    </Form>


</div>

  );
}

export default LoginForm;