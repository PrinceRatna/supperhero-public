import React from 'react';
import './Cart.css'

const Cart = (props) => {
      const {cart}=props;
      console.log(cart);

      let totalSalary=0;
      let y="";
      
      for(const cartData of cart){
          totalSalary=totalSalary+cartData.salary;
         y=y+'   '+cartData.name+'. ';   
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
                     {y}
                 </h5>
             </div>  
    );
};
export {Cart}