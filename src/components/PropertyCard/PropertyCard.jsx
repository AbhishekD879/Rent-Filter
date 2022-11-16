import React from 'react'
import ProductCardImage from './ProductCardImage/ProductCardImage'
import PropertyBrokerInfo from './PropertyBrokerInfo/PropertyBrokerInfo'
import PropertyCardBedBath from './PropertyCardBedBath/PropertyCardBedBath'
import PropertyCardInfo from './PropertyCardInfo/PropertyCardInfo'

const PropertyCard = () => {
  return (
    <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <ProductCardImage/>
                    <PropertyCardInfo/>
                    <PropertyCardBedBath/>
                    <PropertyBrokerInfo/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard