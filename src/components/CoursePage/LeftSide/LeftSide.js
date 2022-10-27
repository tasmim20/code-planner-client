import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function LeftSide({course}) {

    const {image, name, id} = course;

    
  return (
     <div className='card  bg-dark shadow-lg mb-5'>
          <div className="col shadow-lg ">
    <div className="card">
      <img  src={image} className="card-img-top" ></img>
      <div className="card-body d-flex justify-content-between py-3">
        <h5 className="card-title fw-bold text-danger">{name}</h5>
       <Button variant='light' className='btn-outline-info text-dark fw-bold'><Link className='text-decoration-none'  to={`/category/${id}`}>details</Link>
            </Button>

      
      </div>
    </div>
  </div>

     </div>

  );
}

export default LeftSide;


