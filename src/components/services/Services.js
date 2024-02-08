import React from 'react'
import "./Services.css"

import { Datas } from './Datas';
import Cardus from './Cardus';
function Services() {
  
  return (
    <div className='serv' id='service'>
      <h1>My <span>Services</span> </h1>
    <div className='service'>
     { Datas.map((val)=>{
        return(
          <Cardus id={val.id} title={val.title} text={val.text} im={val.im} ban={val.ban} />
        )
      })}
    
    </div>
    </div>
  )
}

export default Services
