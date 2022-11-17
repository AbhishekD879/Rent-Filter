import React from 'react'
import ProductCardImage from './ProductCardImage/ProductCardImage'
import PropertyBrokerInfo from './PropertyBrokerInfo/PropertyBrokerInfo'
import PropertyCardBedBath from './PropertyCardBedBath/PropertyCardBedBath'
import PropertyCardInfo from './PropertyCardInfo/PropertyCardInfo'

const PropertyCard = ({price,type,location,category,coverPhoto:{url},rooms,baths,contactName,phoneNumber}) => {
  return (
    <div className="max-w-6xl mx-auto cursor-pointer">
        <div className="flex items-center justify-center">
            <div className="max-w-sm w-full sm:w-full lg:w-full py-6 px-3">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <ProductCardImage img={url}/>
                    <PropertyCardInfo name={category[0]} Address={location[location.length-1]}  price={price}/>
                    <PropertyCardBedBath bathCount={baths} bedCount={rooms}/>
                    <PropertyBrokerInfo brokerName={contactName} brokerNumber={phoneNumber?.mobile}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PropertyCard