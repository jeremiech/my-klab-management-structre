import React from 'react'
import psp from '../imagepro/psp.jpg'
// import { Link, Route, BrowserRouter,Routes } from 'react-router-dom'
function About() {

  return (
    <div class="personID">
    <p class="center">About me</p>
    <div class="badge">
        <img className="passpt" src={psp} alt="abouti"/>
    </div>
    <div class="paragraph">
        <strong class="nmtitle">Jeremie  Niyonkuru</strong>
        <div class="equali">
        <blockquote>Hello everybody! My name is Jeremie Niyonkuru.
     I am a Web Developer, and I'm very passionate and dedicated to my work.
        </blockquote><blockquote>
    With 3 years experience as a professional Web developer,
 I  have acquired the skills and knowledge necessary to make your project a success. 
 I enjoy every step of the design process, from discussion and collaboration.
</blockquote>
</div>
    <div class="mor">

        <a href='more'>Learn More</a>
        
        
        </div>
     
</div>



         
</div>

    )
}

export default About