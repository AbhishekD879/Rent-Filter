import React from 'react'

const PropertyCardInfo = ({name,price,Address}) => {
  return (
    <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{name?.name}</p>
                        <p className="text-3xl text-gray-900">${price}</p>
                        <p className="text-gray-700">{Address?.name}</p>
    </div>
  )
}

export default PropertyCardInfo