import React from 'react'

const PropertyBrokerInfo = ({brokerName,brokerNumber}) => {
  return (
    <div className="px-4 pt-3 pb-4 border-t border-gray-300 bg-gray-100">
    <div className="text-xs uppercase font-bold text-gray-600 tracking-wide">Realtor</div>
    <div className="flex items-center pt-2">
        <div className="bg-cover bg-center w-10 h-10 rounded-full mr-3" style={{ backgroundImage: "url(https://via.placeholder.com/50x50)" }}>
        </div>
        <div>
            <p className="font-bold text-gray-900">Catherine Heffner</p>
            <p className="text-sm text-gray-700">(111) 111-1111</p>
        </div>
    </div>
</div>
  )
}

export default PropertyBrokerInfo