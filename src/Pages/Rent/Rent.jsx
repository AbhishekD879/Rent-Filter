import React, { useState,useEffect } from 'react'
import PropertyCard from '../../components/PropertyCard/PropertyCard';
import Search from '../../components/Search/Search';
import constants from '../../Constant/constants'
import RentDropDown from './RentDropDown';
import {useQuery} from 'react-query'
import {fetchProperties} from "./../../Api_Calls/PropertyFetch"
import Spinner from '../../components/Spinner/Spinner';
import Error from '../../components/ErrorComponent/Error';
const {TYPOGRAPHY:{H5}}=constants
const Rent = () => {
  const [isFilterOpen,setIsFilterOpen]=useState(false)
  const [config,setConfig]=useState({
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
  // const {data,error,loading}=useFetch("https://bayut.p.rapidapi.com/properties/list",config)
  const {data,status}= useQuery(["property",config],_=>fetchProperties(config))
  useEffect(()=>{
    console.log(config)
  },[config])
  // const arr= ["sad","sadsad","sadadsad","asdsadasd","asdada","sad","sadsad","sadadsad","asdsadasd","asdada","sad","sadsad","sadadsad","asdsadasd","asdada"]
  if(status==="error"){return <Error/>}
  if(status==="loading"){return <Spinner/>}
 
  return (
    <div className=' md:px-10 h-full'>
      <div className=' px-5 h-14 w-full md:flex  md:items-center md:justify-between  mt-12 '>
          <H5 additionalStyle={"font-bold mb-2"}>Search For Properties To Rent</H5>
          <Search name={"Rent_Search"} placeholder="Search For Porperty" type="search" />
      </div>
      <div className='flex justify-end px-5 mt-4'>
          <RentDropDown setConfig={setConfig} isOpen={isFilterOpen} openFilter={setIsFilterOpen}/>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 w-full h-full mt-4'>
        {data?.data?.hits.map((property)=><PropertyCard key={property.id} {...property}/>)}
      </div>
    </div>
  )
}

export default Rent