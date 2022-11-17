import React from 'react'

const CustomInput = ({name,value,setConfig}) => {
    const handelInputChange=({target})=>{
        const {name,value}=target;
        setConfig((pre)=>{
            return {
                ...pre,
                [name]:value
            }
        })
    }
  return (
        <div className="w-full mr-1 md:w-1/2 mb-6 md:mb-0">
            <p className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200  last:mr-0 mr-1 mb-2 ml-[2px]" htmlFor="grid-first-name">
              {name.toUpperCase()}
            </p>
            <input onChange={handelInputChange} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={value} name={name} id="grid-first-name" type="number" placeholder={name.toLowerCase().includes("min")?"MIN":"MAX"} />      
        </div>
  )
}

export default CustomInput