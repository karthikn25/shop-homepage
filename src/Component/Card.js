import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"

export default function Card({count,setCount}){
   
   function handleAdd(){
    setCount(count+1)
   }
   function handleRemove(){
    setCount(count-1)
   }
    return(
      <div className="container">
    <div className="row">
    <div className="col-3">
    <div className="card">
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Fancy Prodect</b></p>
    <p className="rate">$40.00-$80.00</p>
    <br/><br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>View option</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    <div className="badge bg-dark " >Sale</div>
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Special Item</b></p>
    <span>
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
    <p className="rate"><s>$20.00</s>$18.00</p>
    <br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    <div className="badge bg-dark " >Sale</div>
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Sale Item</b></p>
    <p className="rate"><s>$50.00</s>$25.00</p>
    <br/><br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Popular Item</b></p>
    <span>
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
    <p className="rate">$40.00</p>
    <br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className="col-3">
    <div className="card">
    <div className="badge bg-dark " >Sale</div>
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Sale Item</b></p>
    <p className="rate"><s>$50.00</s>$25.00</p>
    <br/><br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Fancy Prodect</b></p>
    <p className="rate">$120.00-$280.00</p>
    <br/><br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>View option</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    
    <div className="badge bg-dark " >Sale</div>
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Special Item</b></p>
    <span>
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
    <p className="rate"><s>$20.00</s>$18.00</p>
    <br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>
    </div>
    </div>
    </div>
    <div className="col-3">
    <div className="card">
    <h4 className="img">450 X 300</h4>
    <br/>
    <p className="name"><b>Popular Item</b></p>
    <span>
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} />
    <FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /><FontAwesomeIcon icon={faStar} style={{color: "#e6df19",}} /></span>
    <p className="rate">$40.00</p>
    <br/>
    <div className="text-center">
    <button className="btn btn-outline-dark mt-auto" onClick={handleAdd}>Add to cart</button>
    <button className="btn btn-outline-dark mt-auto" style={{marginLeft:"5px"}} onClick={handleRemove}>Remove cart</button>   
    </div>
    </div>
    </div>
    </div>
    </div>)
    }
