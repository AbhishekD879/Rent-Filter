import React from 'react'

const PropertyCardInfo = ({name,yearOld,price,Address}) => {
  return (
    <div className="p-4">
                        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">Detached house • 5y old</p>
                        <p className="text-3xl text-gray-900">$750,000</p>
                        <p className="text-gray-700">742 Evergreen Terrace</p>
    </div>
  )
}

export default PropertyCardInfo