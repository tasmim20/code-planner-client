import React from 'react';
import { Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Container>
            <div className='border border-info shadow-lg px-3 py-4 mb-5 bg-info'>
           <h4 className='text-danger'>1.What is cors..???</h4>
           <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
         </div>
         <div  className='border border-info shadow-lg px-3 py-4 mb-5 bg-info'>
           <h4 className='text-danger'>2.Why are we using firebase? What other options do you have to implement authentication?</h4>
           <p>
           Firebase provides tools to grow our app and business, for startups & global enterprises. Get this app up and running quickly & securely with fully managed backend infrastructure. Cross-Platform Solutions.
           </p>
        <p>There are some other platform for implement authentication without firebase. They are: Ory, Supabase,Okta, PingIdentity, KeyCloak, Auth0, MongoDb etc.
 </p>
         </div>
         <div  className='border border-info shadow-lg px-3 py-4 mb-5 bg-info'>
           <h4 className='text-danger'>3. How does the private route work?</h4>
           <p>Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.</p>
         </div>
         <div  className='border border-info shadow-lg px-3 py-4 mb-5 bg-info'>
           <h4 className='text-danger'>4. What is Node? How does Node work?</h4>
           <p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.</p>
           <p>It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
         </div>
            </Container>
       
      
        </div>
    );
};

export default Blog;