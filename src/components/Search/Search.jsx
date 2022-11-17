import React from 'react'
import {HiSearch} from "react-icons/hi"
import constants from '../../Constant/constants'
const {SECONDARY_COLOR}=constants
const Search = ({placeholder,type,name}) => {
  return (
    <div className={`bg-white rounded border border-[${SECONDARY_COLOR}] flex items-center py-2 px-2 mb-2 md:mb-0`}>
        <HiSearch size={"1.2rem"} color={SECONDARY_COLOR}/>
        <input placeholder={placeholder} type={type} name={name} className="ml-1 outline-none border-0" />
    </div>
  )
}

export default Search