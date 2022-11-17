import React from 'react'
import CustomSelect from '../../components/customeSelect/CustomSelect'
import CustomInput from '../../components/CustomInput/CustomInput'
import constants from '../../Constant/constants'
import { useState } from 'react'
const {BUTTONS:{BTN_PRIMARY},PROPERTY_TYPE,RENT_TYPE,FURNISHING} =constants
const RentDropDown = ({isOpen,openFilter,setConfig}) => {
  const [filterConfig,setFilterConfig]=useState({
    locationExternalIDs:"5002,6020",
    purpose:"",
    hitsPerPage:"",
    page:"",
    lang:"",
    sort:"",
    rentFrequency:"",
    categoryExternalID:"",
    agencyExternalIDs:"",
    priceMin:"",
    priceMax:"",
    areaMin:"",
    areaMax:"",
    roomsMax:"",
    roomsMin:"",
    bathsMax:"",
    bathsMin:"",
    furnishingStatus:""
})
  return (
    <div className='relative'>
      <BTN_PRIMARY onClick={()=>{console.log("filterClicked")
        openFilter(pre=>!pre)}} additionalStyle={"md:px-10 "}>
        Filter
      </BTN_PRIMARY>
      
        <div className={`absolute shadow p-2 right-[2%] bg-white rounded ${!isOpen&&'hidden'}`}>
            <CustomSelect setConfig={setFilterConfig} lable={"Rent Type"} options={RENT_TYPE}/>
            <CustomSelect setConfig={setFilterConfig} lable={"Property Type"} options={PROPERTY_TYPE}/>
            {/* <CustomSelect options={[]}/> */}
            <div className='flex items-center'>
              <CustomInput setConfig={setFilterConfig} name={"priceMin"}/>
              <CustomInput setConfig={setFilterConfig} name={"priceMax"}/>
            </div>
            <div className='flex items-center'>
              <CustomInput setConfig={setFilterConfig}  name={"roomsMin"}/>
              <CustomInput setConfig={setFilterConfig} name={"roomsMax"}/>
            </div>
            <CustomSelect setConfig={setFilterConfig} lable={"furnishingStatus"} options={FURNISHING}/>
            <div className='flex items-center'>
              <CustomInput setConfig={setFilterConfig} name={"bathsMin"}/>
              <CustomInput setConfig={setFilterConfig} name={"bathsMax"}/>
            </div>
            <BTN_PRIMARY onClick={()=>{
              openFilter(false)
              setConfig(filterConfig)
              }} additionalStyle={"w-full"}>APPLY FILTER</BTN_PRIMARY>
        </div>
       
    </div>
  )
}

export default RentDropDown