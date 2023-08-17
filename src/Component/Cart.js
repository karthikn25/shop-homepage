import React from 'react'

export default function Cart({count,setCount}){
    
    return(
      <button className="btn btn-outline-dark " type="submit" style={{margin:'2rem 0.5rem 0.5rem 100rem '}} id='cart'>
                             <i class="bi-cart-fill me-1"></i>
                              Cart
                              <span class="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
                          </button>
    )
  }
