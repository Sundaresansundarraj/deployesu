import React from 'react'
import "./Home.css"
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import img1 from "../../assets/imgs/mypic.jpeg"
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { MdOutlineCancelPresentation } from "react-icons/md";
import img2 from "../../assets/imgs/res.png"
import { SlCalender } from "react-icons/sl";

import { useState } from 'react';
import "../About/About.css"

import Container from 'react-bootstrap/esm/Container'
function Home() {
  const [typeEffect] = useTypewriter({
    words: ["Frontend developer", "android developer", "web developer"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  })
  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index);
  }
  const [togleState, setTogleState] = useState(0)

  const togleTab = (index) => {
    setTogleState(index);
  }
  return (
    <div className='homu' id='home'>
      <Container className='context'>
        <div className='texta'>
          <h3>Hello it's Me</h3>
          <h1>David Sundi</h1>
          <h3 >And I'm a <span style={{ color: "red" }}>{typeEffect}</span><Cursor /></h3>
          <p className='col-md-11'>I'm creative designer based in Chennai, and I'm very passionate and dedicated to my work.
          </p>
        </div>
        <div className='emojus'>
          <FaFacebookF className='emoju fas' />
          <RiInstagramFill className='emoju in' />
          <IoLogoWhatsapp className='emoju wh' />
          <FaTwitter className='emoju tw' />
        </div>
        <div className='buttonu'>
          <Button className='btnu' onClick={() => { toggleTab(1) }}>
            More About Me
          </Button>
        </div>
      </Container>
      <Container className='conimg'>
        <img src={img1} className=" conimgs" alt='sundi' />
      </Container>
      <Container className={toggleState === 1 ? 'kuka abouttext activeda' : 'kuka abouttext'}>

        <MdOutlineCancelPresentation className='kuj' onClick={() => toggleTab(0)} />
        <Container className='edu'>
          <Button onClick={() => { togleTab(1) }} >Edication</Button>
          <Button onClick={() => { togleTab(2) }} >Resume</Button>
        </Container>
        <Container className={togleState === 1 ? "summah kko" : "summah"}>
          <MdOutlineCancelPresentation className='kuj' onClick={() => togleTab(0)} />
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
        <Container className={togleState === 2 ? "summahk kko" : "summahk"}>
          <MdOutlineCancelPresentation className='kuj' onClick={() => togleTab(0)} />
          <img src={img2} className='img2' height={600} />
          <Button className='down'>Download</Button>
        </Container>
      </Container>
    </div>
  )
}

export default Home
{/* <div className='model'>
            
            <div onClick={toggle} className='overlay'></div>
            

            
            <div className='model-content d-flex' >
              <div className='model-img left'>
                <img src="#" alt='img varla' />
              </div>
              <div className='model-text right'>
                <span>Featured - Design</span>
                <h1>Netflix Page</h1>
                <p>lorem was a small boy he was very very good designer and the flim story maker he jude all the people crtly he was stron and good to in his career lorem was a small boy he was very very good designer and the flim story maker he jude all the people crtly he was stron and good to in his career</p>
                <div className='button f-flex mtop'>
                  <button className='btn-shadow'>
                    View Project
                  </button>
                </div>
              </div>
            </div>
             
            
          </div> */}