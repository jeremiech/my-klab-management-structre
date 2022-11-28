import React from 'react'
import iris from '../album/iris.jpg'
import images from '../album/images.jpg'
import rainbow from '../album/rainbow.jpg'
import lamp from '../album/lamp.jpg'
function Blog() {
  return (
    <div id="blog-section">
    <span>k-Lab Blog section</span>
    <div className="blogcontainer">
        <div className="blog-box">
            <div className="blog-img">
                <img src={images} alt="my iamge" />
            </div>
            <div className="blog-text">
                <p>visitors have time to get explaination about klab activities </p>
                    <a href="#">Read more</a>
            </div>

        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={iris} alt="this is iris" />
            </div>
            <div className="blog-text">
                <p>iris is usually called global refer base, it signify the strengthen and dizzness</p>
                <a href="#">Read more</a>
            </div>

        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={rainbow} alt="rainbow" />
            </div>
            <div className="blog-text">
                <p>rainbow is a collection of different color where everycolor 
                    exhibit uniq reference and is used to measure different color sign</p>
                    <a href="#">Read more</a>
                </div>


        </div>
        <div className="blog-box">
            <div className="blog-img">
                <img src={lamp} alt="lamp image" />
            </div>
            <div className="blog-text">
                <p>
                 trainer and trainer benefit a time to discuss and collaboration in different field of workd
                </p>
                <a href="#">Read More</a>

            </div>

        </div>
    </div>
   

</div>  

    )
}

export default Blog