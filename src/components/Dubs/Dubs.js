import React from 'react'
import { Data } from '../Protfolio/Dataa'
import { Card, Container } from 'react-bootstrap'
function Dubs() {
  return (
   <div>
   {Data.map((val)=>{
    return(
      <Card key={val.id}>
        <Card.Title>{val.title}</Card.Title>
      </Card>
    )
   })}
    </div>
  )}

export default Dubs
