import React from 'react';
import './SingleCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart
 } from '@fortawesome/free-solid-svg-icons'

const SingleCard = (props) => {
    const {name,age,country,experience,email,phone,salary,img}=props.details;
    const element = <FontAwesomeIcon icon={faShoppingCart} style={{color:'gold'}} />
    return (
    <div className='single-card'>
         <div className='img-div'>
                 <img style={{width:'100px',height:'100px',borderRadius:'50px'}} src={img} alt=''/>
         </div>
            
            <h3>Name: {name}</h3>
            <h5>Age: {age}              </h5>
            <h5>Country: {country}      </h5>
            <h5>Experience: {experience}</h5>
            <h5>Email: {email}          </h5>
            <h5>Phone: {phone}          </h5>
            <h5>Salary: ${salary}       </h5>
            <button className='btn-regular' onClick={()=>{props.handleEventClick(props.details)}}>{element} Add Cart</button>
    </div>
    );
};

export default SingleCard;