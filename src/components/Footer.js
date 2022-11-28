import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {ImTwitter} from 'react-icons/im'

function Footer() {
  return (
    <footer className="foregion">
    <div className="foot">
        <div className="box">
            <p>k-lab</p>
            <span>Kacyiru,Gasabo</span>
        </div>
    </div>
    <div className="foot">
        <div className="box">
            <p>Kacyiru</p>
            <span>Kigali,Rwanda</span>
        </div>
    </div>
    <div className="foot">
        <div className="box">
            <p>klab@gmail.com</p>
            <span>(+250) ### ### 123</span>
        </div>
    </div>
   <div className="foot">
    <div className="social-">
        <a href="https://www.instagram.com/"><BsInstagram  className='ico' style={{color:"tomato"}}/></a>
        <a href="https://www.facebook.com/"><RiFacebookCircleFill className='ico'  style={{color:"blue"}} /></a>
        <a href="https://www.twitter.com/">< ImTwitter className='ico'  style={{color:"white"}}/></a>
    </div>
   </div>

</footer>
    )
}

export default Footer