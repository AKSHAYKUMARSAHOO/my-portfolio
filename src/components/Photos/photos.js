import React from 'react'
import './photos.css'
import x from '../../images/x.png'
const Photos = () => {
  return (
    <section id="work" >
       <h2 className='tittle'>Our Clubs</h2>
       <span className="workd">Get set up and learn how to use icons in your projects, awesomely. We've got set-up guides for those just </span>
       <div className="workimg">
        <img src={x} alt="" className="workimgs"/>
        <img src={x}  alt="" className="workimgs"/>
        <img src={x}  alt="" className="workimgs"/>
        <img src={x}  alt="" className="workimgs"/>
        <img src={x}  alt="" className="workimgs"/>
        <img src={x}  alt="" className="workimgs"/>
        
       </div>
    </section>
  )
}

export default Photos;