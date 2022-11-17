import React from 'react'
import CustomSelect from '../../components/customeSelect/CustomSelect'
import constants from '../../Constant/constants'
const {BUTTONS:{BTN_PRIMARY}} =constants
const RentDropDown = ({isOpen,openFilter}) => {
  return (
    <div className='relative'>
      <BTN_PRIMARY onClick={()=>{console.log("filterClicked")
        openFilter(pre=>!pre)}} additionalStyle={"md:px-10 "}>
        Filter
      </BTN_PRIMARY>
      {isOpen&&(
        <div className='absolute shadow p-2 right-[2%] w-80 h-80 bg-white rounded'>
            <CustomSelect lable={"Rent Type"} options={[{name:"Monthly",val:"monthly"},{name:"Yearly",val:"yearly"},{name:"Weekly",val:"weekly"},{name:"Daily",val:"daily"}]}/>
            {/* <CustomSelect options={[]}/>
            <CustomSelect options={[]}/> */}
        </div>
      )}
    </div>
  )
}

export default RentDropDown