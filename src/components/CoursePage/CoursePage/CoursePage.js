import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Category from '../Category/Category';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';


const CoursePage = () => {
    const courses = useLoaderData();
  
  
    // console.log(courses.name);
    return (
        <div>
            <Container>
                <Row>
                <Col lg="9">
             {/* <Row>
                {/* {
                    courses.map(course => <LeftSide className=" col-md-4" key={course.id} course={course}></LeftSide>)
                } */}
           
             {/* </Row> */} 

             <div className='container d-flex justify-content-center align-items-center'>
                   <div className='row'>
                    {
                        courses.map(course =><div className='col-md-4' ><LeftSide key={course.id} course={course}></LeftSide></div>)
                    }

                   </div>

             </div>
                </Col>
                <Col lg="3">
                <div>
                    {/* <h2>courses: {courses.length}</h2>
                    {
                        courses.map(course => <p key={course.course_id} course={course}><Link to>{course}</Link></p>)
                    } */}
                <RightSide></RightSide>
                </div>
                </Col>
                </Row>

            </Container>
        </div>
    );
};

export default CoursePage;
