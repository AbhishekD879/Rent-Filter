import React from 'react'

const CustomSelect = ({options,lable,setConfig}) => {
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
    <div>
        <p className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-indigo-600 bg-indigo-200  last:mr-0 mr-1 mb-2 ml-[2px]">{lable}</p>
        <div className="flex justify-center">
            <div className="mb-3 xl:w-96">
                <select onChange={handelInputChange} name={lable} className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                    <option selected={true} value="">SELECT {lable.toUpperCase()}</option>
                    {options.map(({name,val})=><option key={name+val} value={val}>{name}</option>)}
                </select>
            </div>
        </div>
    </div>
  )
}

export default CustomSelect