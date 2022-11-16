import React from 'react'
import {HiHome} from "react-icons/hi"
import { Link } from 'react-router-dom';
import CONSTANTS from "./../../../Constant/constants.js"
const {TYPOGRAPHY:{H5},PRIMARY_COLOR,SECONDARY_COLOR}=CONSTANTS;
const Logo = () => {
  return (
    <Link to="/">
    <div className='flex  justify-center'>
        <HiHome size={"2rem "} color={PRIMARY_COLOR}/>
        <H5 additionalStyle={`text-[${SECONDARY_COLOR}] mb-0 font-semibold`}>Estatery</H5>
    </div>
    </Link>
  )
}

export default Logo