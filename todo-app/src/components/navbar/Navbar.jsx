import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { PiSquaresFour } from "react-icons/pi";
import { FiSun } from "react-icons/fi";
import { LuMoonStar } from "react-icons/lu";
import { TfiMenuAlt } from "react-icons/tfi";
import './Navbar.css'

const Navbar = ({ setShowSidebar ,showSidebar, mode ,setMode }) => {
    const [ listingStyle, setListingStyle ] = useState(true)
    return (
        <div className='navbar-container'>
            <div>
                <IoIosMenu className='nvb-icon' onClick={()=>setShowSidebar(!showSidebar)}/>
                <h2>DoIt</h2>
            </div>
            <div>
                <CiSearch className='nvb-icon'/>
                {listingStyle ? <PiSquaresFour className='nvb-icon'onClick={()=>setListingStyle(!listingStyle)}/> : <TfiMenuAlt className='nvb-icon' onClick={()=>setListingStyle(!listingStyle)}/> }
                {mode==='light' && ( <LuMoonStar className='nvb-icon' onClick={()=>setMode('dark')}/> ) }
                {mode==='dark' && ( <FiSun className='nvb-icon' onClick={()=>setMode('light')}/> ) }
            </div>
        </div>
    )
}

export default Navbar