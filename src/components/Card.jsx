import React from 'react';

import './Card.css'; // Import the CSS file

// function Card(props) {
//   return (
//     <div className="card card-custom"> {/* Use className for custom and Bootstrap classes */}
//       <img src={props.image} className="card-img-top img-fluid" alt="Crop" />
//       <div className="card-body">
//         <p className="card-text">{props.text}</p>
//         <button className='btn btn-primary '>Explore Now <i className="fa-solid fa-location-arrow"></i> </button>
//       </div>
//     </div>
//   );
// }
import Form1 from '../components/Form1'
import Form2 from '../components/Form2'

function Card(props) {
    // Unique ID for each modal based on the card's ID prop
    const modalId = `exploreModal-${props.id}`;
    
    return (
      <div>
        <div className="card card-custom">
          <img src={props.image} className="card-img-top img-fluid" alt="Crop" />
          <div className="card-body">
            <p className="card-text">{props.text}</p>
            {/* Updated data-bs-target to reference the unique modal ID */}
            <button className='btn btn-primary' data-bs-toggle="modal" data-bs-target={`#${modalId}`}>Explore Now <i className="fa-solid fa-location-arrow"></i></button>
          </div>
        </div>
  
        {/* Modal with unique ID */}
        <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}Label`} aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`${modalId}Label`}>{props.heading}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {props.id==='1' && <Form1/>}
                {props.id==='2' && <Form2></Form2>}
                {/* Add more conditions here for other IDs */}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
  

export default Card;
