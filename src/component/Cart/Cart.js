import React from 'react';
import './Cart.css'
const Cart = (props) => {
      const {cart}=props;
    //   console.log(cart);
      let totalSalary=0;
      let doctorName="";
      
      for(const cartData of cart){
          totalSalary=totalSalary+cartData.salary;
         doctorName=doctorName+'   '+cartData.name+'. ';   
      }
    return (
             <div className='cart'>
                 <h4>Doctor Added:
                     {
                      props.addCount  
                     }
                     </h4> 
                 <h4>
                     Total Cost:$
                     {
                       totalSalary
                     }
                 </h4>   
                 <h5>
                     {doctorName}
                 </h5>
             </div>  
    );
};
export {Cart}