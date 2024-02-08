import React from 'react'
import "./Contact.css"
import { Button, Card, Container } from 'react-bootstrap'
import { RiMailLockFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiMinutemailer } from "react-icons/si";
import { FaFacebookMessenger } from "react-icons/fa6";
import Form from 'react-bootstrap/Form';
function Contact() {
  return (
    <div className='contactu' id='port'>
      <h1 className='conu'>Get in <span>touch</span></h1>
      <div className='contacts'>
        <Container className='cont-1'>
          <h3>Talk to me</h3>
          <Container className='contu'>
            <Card>
              <Card.Body>
                <RiMailLockFill className='ii mai' />
                <Card.Title>Email</Card.Title>
                <Card.Text>sundaresan@gmail.com</Card.Text>
                <a href='#'>
                  Write Me
                  <FaArrowRight className='o' />
                </a>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <IoLogoWhatsapp className='ii wha' />
                <Card.Title>whatsapp</Card.Title>
                <Card.Text>+91 9159231586</Card.Text>
                <a href='#'>
                  Write Me
                  <FaArrowRight className='o' />
                </a>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <FaFacebookMessenger className='ii mes' />
                <Card.Title>Message</Card.Title>
                <Card.Text>+91 9159231586</Card.Text>
                <a href='#'>
                  Write Me
                  <FaArrowRight className='o' />
                </a>
              </Card.Body>
            </Card>
          </Container>
        </Container>
        <Container className='cont-2'>
          <h3>Write me your project</h3>
          <Container className='contn'>
            <Form>
              <Form.Group className="mb-3 h" controlId="formGroupEmail">
                <Form.Control type="email" placeholder="Insert Your email" />
                <Form.Label>Email address</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3 h" controlId="formGroupPassword">
                <Form.Control type="text" placeholder="Insert Your Name" />
                <Form.Label>Password</Form.Label>
              </Form.Group>
              <Form.Group className="mb-3 h" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" placeholder='Write Your Project' rows={3} />
                <Form.Label>Example textarea</Form.Label>
              </Form.Group>
            </Form>
          </Container>
          <Button >Sent Message <SiMinutemailer className='po'  /></Button>
        </Container>
      </div>

    </div>
  )
}

export default Contact
