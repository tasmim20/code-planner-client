import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

function Register() {

    const {createUser} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
     const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

   const handleSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        setError('');
        form.reset();
        navigate(from, {replace:true});
       
    })
    .catch(error =>{
        console.error('error', error)
        setError(error.message)
    })

    if(password.length < 6){
        setError('Password must be 6 characters');
        return;
    }
   


   }

    return (
  <div className='border border-dark shadow-lg w-50 bg-info mb-5 mt-5 mx-auto'>
  <Form onSubmit={handleSubmit} className='  w-50 mt-5 mx-auto'>
      <h4 className='f-semibold pb-4 pt-3'>Please Enter Email & Password.</h4>
  <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" name='name' placeholder="Enter Your Full Name" />
       
        </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPhoto">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photoURL' placeholder="PhotoURL" />
       
        </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" required />
       
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required/>
        </Form.Group>
    
     
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
 
        </Form.Group>
        <Button variant="primary" type="login" className='px-5 mb-5'>
          Register
        </Button>
        <Form.Text className=" fw-bold d-block text-danger mb-3">
        {error}
      </Form.Text>
       
        <h6 className=' mb-3 pb-2'> Already have an account.?? Please <Link to='/login'>Login</Link> </h6>
        
      </Form>
  
  
  </div>
  
    );
  }
  
  export default Register;