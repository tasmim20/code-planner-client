import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CourseDetails({course}) {

    const {_id, title, instructor, course_fee, details, skills} = course;

    console.log(course);
  return (
   <Container className=' pb-2 d-flex justify-content-center '>
     <Card className="bg-dark" style={{ width: '40rem' }}>
    <Card.Header className='fw-bold. text-danger'><h3>Course Name: {title}</h3></Card.Header>
    <Card.Img className='border border-black my-2 img-fluid' style={{height:'330px'}} variant="top" xs={2} md={2} src={instructor.img} />
      <Card.Title className=' fw-bold my-2 mx-3 text-success'>Instructor : {instructor.name}</Card.Title>
    <Card.Body className=''>
      <Card.Text className='text-light'>
       {details}
      </Card.Text>
      <Card.Text>
        <h5 className='text-success pb-2'><li>Skills you’ll gain: {skills}</li></h5>
        <div className='text-light d-flex justify-content-between'>
        <h6 >Course Duration: {instructor.course_duration}</h6>
        <h6>Course-Fee : {course_fee}</h6>
        </div>
        <div>
        <Link className='text-decoration-none text-light' to={`/premiumPage/${_id}`} >  <Button variant='danger' className='text-light' >Get Premium Access</Button></Link>
        </div>

      </Card.Text>

    </Card.Body>
    
  </Card>
   </Container>
  );
}

export default CourseDetails;