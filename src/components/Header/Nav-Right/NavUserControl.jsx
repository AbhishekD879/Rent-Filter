import React from 'react'
import constants from '../../../Constant/constants'
import {Link} from "react-router-dom"
const {BUTTONS:{BTN_OUTLINE,BTN_PRIMARY}}=constants
const NavUserControl = () => {
  return (
    <div className='flex items-center justify-center'>
       <Link to="/login">
        <BTN_OUTLINE>
                LOGIN
        </BTN_OUTLINE>
       </Link>

       <Link to="/register">
       <BTN_PRIMARY additionalStyle={"ml-2"}>
            JOIN US
        </BTN_PRIMARY>
       </Link>
    </div>
  )
}

export default NavUserControl