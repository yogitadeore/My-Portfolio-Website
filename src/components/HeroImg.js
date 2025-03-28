import './HeroImgStyles.css';
import React from 'react'
import IntroImg from "../assets/heroimage.avif"
import { Link } from 'react-router-dom';
import TypingEffect from './TypingEffect';

const HeroImg = () => {

  
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='into-img' src={IntroImg} alt="IntroImg">
            </img>
        </div>
        <div className='content'>
            <p> Hello, My name is </p><h1>Yogita Deore</h1>
            <h4>And I am a</h4> <h3><TypingEffect/></h3>
            <Link to='/project' className="btn">HIRE ME</Link>
            <Link to='/contact' className='btn btn-light'>CONTACT</Link>

        </div>
    </div>
  )
}

export default HeroImg