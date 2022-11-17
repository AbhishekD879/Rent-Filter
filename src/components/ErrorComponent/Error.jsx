import React from 'react'
import constant from '../../Constant/constants'
const {BUTTONS:{BTN_PRIMARY}}=constant;
const Error = ({setConfig}) => {
  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
         <span className="font-medium">INTERNAL SERVER ERROR OR INVALID FILTERS </span> Cannot fetch Data.
    </div>
    <BTN_PRIMARY onClick={()=>{
      setConfig({
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
    }}>
      Return To Rent
    </BTN_PRIMARY>
    </div>
  )
}

export default Error