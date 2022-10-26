import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './RightSide.css'

const RightSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () =>{
        fetch('http://localhost:5000/courses-categories')
        .then(res => res.json()
        .then(data => setCategories(data)))
    })
    return (
        
           <div className='rightSide'>
           {
                categories.map(category => <li className='courses' key={category.id}><Link  className='category1' to={`/category/${category.id}`}>{category.name}</Link></li>)
            }
           </div>
        
    );
};

export default RightSide;