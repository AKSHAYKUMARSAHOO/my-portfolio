import React from 'react'
import'./home.css';
import  a from'../../images/a.png';
import {Link} from 'react-scroll'
const Homes = () => {
  return (
   <section id='sec'>
    <div className="secCon">
        <span className='hay!'>Hey!</span>
        <span className='web'>Welcome To our Website </span>
        <p className='para'>w cvws vclvrvkrmvknv vvn</p>
        <Link><button className='btn1'>Register </button></Link>
    </div>
    <img src={a} alt='' className='a'/>
   </section>
  )
}

export default Homes