import React from 'react'
import LinksContainer from './LinksContainer'
import brandRecognition from '../images/icon-brand-recognition.svg'
import detailedRecords from '../images/icon-detailed-records.svg'
import fullyCustomizable from '../images/icon-fully-customizable.svg'

const Main = () => {
  return (
    <main className="bg-Gray text-center py-4 px-6">
      <LinksContainer />
      <h3 className="text-2xl font-bold mt-5 text-VeryDarkViolet">
        Advanced Statistics
      </h3>
      <p className="font-semibold text-GrayishViolet">
        Track how your links are performing across the web with our 
        advanced statistics dashboard.
      </p>
      <div className="h-max ">
        <div className="stat">
          <img src={brandRecognition} alt=""  className=""/>
          <h4 className="">
            Brand Recognition
          </h4>
          <p className="">
            Boost your brand recognition with each click. Generic links don’t 
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="stat ">
          <img src={detailedRecords} alt=""  className=""/>
          <h4 className="">
            Detailed Records
          </h4>
          <p className="">
            Gain insights into who is clicking your links. Knowing when and where 
            people engage with your content helps inform better decisions.
          </p>
        </div >
        <div className="stat">
          <img src={fullyCustomizable} alt=""  className=""/>
          <h4 className="">
            Fully Customizable
          </h4>
          <p className="">
            Improve brand awareness and content discoverability through customizable 
            links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </main>
  )
}

export default Main