import React,{useState} from 'react'
import { MdCancel } from "react-icons/md";
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
function Cds(val) {
    const [one, setOne] = useState(false);
    const toggle = () => {
      return (
        setOne(!one)
      )
    }
  return (<>
  
  <div className='card' key={val.id} >
                  <div className='kju'> <img src={val.image} height={300} className=' card-img-top imgu' alt='u' onClick={toggle} /></div>
                  <div className='card-body'>
                    <Link to="dd" > <h4 className='card-title'>{val.title}</h4></Link>
                    <p className='card-text'>{val.description}</p>
                  </div>
                
                  </div>
                  {one && (
                    <div className="overlay" onClick={toggle}>
                      <div className='model-content card'>
                          <img src={val.image} height={300}  className=' card-img-top '/>
                          <div className='card-body'>
                          <h4 className='card-title'>{val.title}</h4>
                          <p className='card-text'>{val.description}</p>
                          </div>
                      </div>
                    </div>
                  )}

                 
                 
                  </>
  )
}

export default Cds
