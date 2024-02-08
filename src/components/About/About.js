import React, { useState } from 'react'
import "./About.css"
import img1 from "../../assets/imgs/mypic.jpeg"
import cv from "../../assets/sundi.pdf"
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { MdOutlineCancelPresentation } from "react-icons/md";
import img2 from "../../assets/imgs/res.png"
import { SlCalender } from "react-icons/sl";
function About() {
    const [toggleState,setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index); 
    }
    const [togleState,setTogleState] = useState(0)

    const togleTab = (index) => {
        setTogleState(index); 
    }
    
    return (
        <div className='about ' id='about'>
            <Container className='aboutimg col-xl-5'>
                <img src={img1} alt='summa' />
            </Container>
            <Container className='abouttext  col-xl-7'>
                <h2>About <span>Me</span></h2>
                <h4>Full stack Development</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus dolore pariatur explicabo ullam
                    sequi error voluptates repellat, eos sapiente omnis cumque velit quaerat nesciunt necessitatibus
                    exercitationem sit voluptatem porro voluptatibus accusamus? Reiciendis quam illo ad ex blanditiis
                    aperiam soluta neque voluptatum nostrum nesciunt ut, ipsam porro. Eum porro, voluptate nihil ipsum rem
                    quos blanditiis reprehenderit ipsa magnam, quo quisquam mollitia.</p>
                <Button className='btnu'  onClick={()=>{toggleTab(1)}}>
                    More About Me
                </Button>
               
            </Container>
            <Container className={toggleState === 1 ? 'kuka abouttext activeda' : 'kuka abouttext'}>
           
                <MdOutlineCancelPresentation className='kuj' onClick={()=>toggleTab(0)} />
                <Container className='edu'>
                <Button  onClick={()=>{togleTab(1)}} >Edication</Button>
                <Button onClick={()=>{togleTab(2)}} >Resume</Button>
                </Container>
                <Container className={togleState === 1 ? "summah kko": "summah"}>
            <MdOutlineCancelPresentation className='kuj' onClick={()=>togleTab(0)} />
            <h1 className='gd'>Edication</h1>
              <Container className='datas'>
                <div className='data'>
                    <div>
                        <h3>BE-ECE </h3>
                        <span>SRM VEC</span>
                        <div> <SlCalender className='mu' /> <span>2019-2023</span></div>
                    </div>
                    <div>
                        <span className='round'></span>
                        <span className='line'></span>
                    </div>
                </div>
                <div className='data'>
                <div>
                        <span className='round'></span>
                        <span className='line'></span>
                    </div>
                    <div>
                        <h3>BE-ECE </h3>
                        <span>SRM VEC</span>
                        <div> <SlCalender className='mu' /><span> 2018-2019</span></div>
                    </div>
                </div>
                <div className='data'>
                    <div>
                        <h3>BE-ECE </h3>
                        <span>SRM VEC</span>
                        <div> <SlCalender className='mu' /> <span>2016-2017</span></div>
                    </div>
                    <div>
                        <span className='round'></span>
                       
                    </div>
                </div>
              </Container>
            </Container>
            <Container className={togleState === 2 ? "summahk kko": "summahk"}>
            <MdOutlineCancelPresentation className='kuj' onClick={()=>togleTab(0)} />
            <img src={img2} className='img2' height={600} />
            <a className=' down' download=" " href={cv} ><Button>Download</Button></a> 
            </Container>
            </Container> 
          
        </div>
    )
}

export default About
