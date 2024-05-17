import React from 'react'
import Image from '../assets/crop.jpg'
function CropItem(props) {
  return (
    <>
    <div className="card" style={{width:"20%"}}>
  <img className="card-img-top" src={Image} alt="Card image cap"/>
  <div className="card-body">
    <p className="card-text">{props.crop.rain}</p>
    <p className="card-text">{props.crop.temp}</p>
    <p className="card-text">{props.crop.nitro}</p>
    <p className="card-text">{props.crop.date}</p>
  </div>
</div>
    </>
  )
}

export default CropItem