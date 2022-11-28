import React from 'react'
// import emailjs from 'emailjs-com'
function Contact() {

  return (
<div id="fillform">
    <div className="fom">
        <span>Get In Touch</span>
        <section> Please do not hasitate to reach us<br />we are available 24/7
        </section>
        <form id="fo">
         <input className="in1" type="text" name="fn" placeholder="Name" />
         <input className="in1" type="email"  name="eml" placeholder="Email" />
         <textarea className="tx" cols="100" rows="50" name="mesg" placeholder="Message"></textarea>
         <input className="btn"type="submit" value="Submit" />
        </form>
   </div>
    <div className="maping">
        <div>
        <div className="mapouter"><div className="gmap_canvas">
            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://123movies-to.org"></a><br /><a href="https://www.embedgooglemap.net">embed map in gmail</a></div></div>
    </div>
        </div>
</div>





    )
}

export default Contact