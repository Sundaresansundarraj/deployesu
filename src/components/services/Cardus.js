import React from 'react'
import { useState } from 'react'
import { MdCancel } from "react-icons/md";
import { Button, Card, Container } from 'react-bootstrap'
function Cardus(props) {
    const [ru,setru]=useState(false)
  const tol =()=>{
    return(
      setru(!ru)
    )
  }
  return (<>
    <Card key={props.id}  >     
      <Card.Body>
         <div className='emg'>{props.im}</div>
         <Card.Title>{props.title}</Card.Title>
         <Card.Text>{props.text}
         </Card.Text>
         <Button onClick={tol}>{props.ban}</Button>
       </Card.Body>
       
     </Card>
     {ru && (
        <div className='over'>
            <div className='container'>
            <MdCancel className='kalluo'  onClick={tol} />
            <h1 className='fs-2 mt-3 ' ><span className='py-4 fs-1'>{props.im}</span> {props.title} </h1>
             
              <p className='p-4 fs-5'>akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot akudcelgchoqurclhivuoqwetfc3rqljch puq r ;qjcr3hpvuwtqfeelqec ljbdf vluwetogreuc lweufvot</p>
                
            </div>
        </div>
     )}
     
     </>
  )
}

export default Cardus
