import React from 'react';
import {FaUserCircle,FaBars}from 'react-icons/fa'

const Nav=(props)=>{
    return(
        <div className='nav'>
            <div className="nav-content">
               <img className="logo" src="./icon.png" alt=""></img>
               <h3>airbnb</h3>
             </div>
             <div className="nav-right-content">
                <button>Become a host</button>
                <img  className="host" src="./host.png" alt=""></img>
                <div className="user">
                 <FaBars />
                 <FaUserCircle />
                </div>
             </div>
            
        </div>
    )
}
export default Nav;