// import { findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect, useState } from 'react';
import { Cart } from '../Cart/Cart';
import SingleCard from '../SingleCard/SingleCard';
import './Card.css'
const Card = () => {
    const [doctorDetails,setDoctorDetails]=useState([]);
    useEffect(()=>{
        fetch('./doctor.json')
        .then(res=>res.json())
        .then(data=>setDoctorDetails(data));
    },[]);
    const[count,setCount]=useState(0);
    const [cart,setCart]=useState([]);

        let handleEventClick=(detail)=>{
           let newCart=[...cart,detail];
               setCart(newCart);
                const newCount=count+1;
             setCount(newCount);
        } 
    return (
        <div className='card-container'>
            <div className='single-card-container'>
                 {
                     doctorDetails.map((details)=><SingleCard key={details.id} handleEventClick={handleEventClick}  details={details}></SingleCard>)
                 }  
            </div>
          
              <Cart addCount={count} cart={cart} ></Cart>
            
        </div>
    );
};

export default Card;