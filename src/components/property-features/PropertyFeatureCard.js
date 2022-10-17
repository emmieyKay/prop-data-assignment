import bedIcon from '../../assets/Listing-Icons.svg'
import bathIcon from '../../assets/Listing-Icons-1.svg'
import parkingIcon from '../../assets/Listing-Icons-2.svg'

export default function PropertyFeatureCard({ ...props }) {
  const { feature } = props;
  return (
    <div className="flex flex-col lg:flex-row w-full shadow-sm ">
      <div className="flex w-full md:w-1/2 lg:w-2/3 relative">
        <img src={feature.featureImage} alt={feature.id} className="md:absolute md:inset-0 w-full h-44 md:h-full object-cover"/>
      </div>
      <div className="flex-auto p-6 w-full md:w-1/2 lg:w-1/3">
        <div className="flex flex-col">
          <div className="flex-auto text-2xl font-bold text-slate-900">
            {feature.propertyValue}
          </div>
          <span className="w-full my-8 text-gray-400">{feature.details}</span>

          {/* summary details */}
          <div className="flex flex-row space-x-4 font-bold text-gray-400">
            <div className="inline-flex items-center">
              <img className="mr-4" src={bedIcon} alt="bed-icon"/>
              {feature.beds}
            </div>
            <div className="inline-flex items-center">
              <img className="mr-4" src={bathIcon}  alt="bath-icon"/>
              {feature.bathrooms}
            </div>
            <div className="inline-flex items-center">
              <img className="mr-4" src={parkingIcon}  alt="parting-icon"/>
              {feature.parking}
            </div>
          </div>
          <span className="w-full my-8 text-gray-400">{feature.description}</span>

          <div className="inline-flex items-center">
            <img className="w-20 h-20 rounded-full" src={feature.agentPic} alt="" />
            <div className="ml-3 flex flex-col">
              <span className="font-bold text-lg">
                {feature.agentName}
              </span>
              <div className="text-red-500 text-md mt-1">
                View contact number
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}