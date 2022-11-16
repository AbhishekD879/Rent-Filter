import React from 'react'
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import constants from '../../Constant/constants'
const {TYPOGRAPHY:{H5}}=constants
const Rent = () => {
  const arr= ["sad","sadsad","sadadsad","asdsadasd","asdada"]
  return (
    <div className=' md:px-10 h-full'>
      <div className='flex items-center px-5 h-14 w-full justify-between mt-12 mb-2'>
          <H5 additionalStyle={"font-bold"}>Search For Properties To Rent</H5>
          
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 w-full h-full'>
        {arr.map((card)=><PropertyCard/>)}
      </div>
    </div>
  )
}

export default Rent