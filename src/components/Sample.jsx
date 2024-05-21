// import React, { useState, useEffect } from 'react';
// import rawData from '../data/json-fixer.json'

// const App = () => {
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');

//   // Assuming rawData is available


//   useEffect(() => {
//     const transformData = (data) => {
//       return data.reduce((acc, item) => {
//         const { STATE, DISTRICT } = item;
//         if (!acc[STATE]) {
//           acc[STATE] = {
//             state: STATE,
//             districts: [],
//           };
//         }
//         acc[STATE].districts.push(DISTRICT);
//         return acc;
//       }, {});
//     };

//     const transformedData = Object.values(transformData(rawData));
//     setStates(transformedData);
//   }, []);

//   const handleStateChange = (event) => {
//     const stateName = event.target.value;
//     setSelectedState(stateName);
//     const state = states.find(s => s.state === stateName);
//     setDistricts(state ? state.districts : []);
//     setSelectedDistrict(''); // Reset district selection when state changes
//   };

//   const handleDistrictChange = (event) => {
//     setSelectedDistrict(event.target.value);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="form-group">
//         <label htmlFor="stateSelect">Select State</label>
//         <select
//           id="stateSelect"
//           className="form-control"
//           onChange={handleStateChange}
//           value={selectedState}
//         >
//           <option value="" disabled>Select State</option>
//           {states.map((state) => (
//             <option key={state.state} value={state.state}>{state.state}</option>
//           ))}
//         </select>
//       </div>

//       {selectedState && (
//         <div className="form-group">
//           <label htmlFor="districtSelect">Select District</label>
//           <select
//             id="districtSelect"
//             className="form-control"
//             onChange={handleDistrictChange}
//             value={selectedDistrict}
//           >
//             <option value="" disabled>Select District</option>
//             {districts.map((district) => (
//               <option key={district} value={district}>{district}</option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;




// import React, { useState, useEffect } from 'react';
// import rawData from '../data/json-fixer.json'
// const App = () => {
//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [selectedState, setSelectedState] = useState('');
//   const [selectedDistrict, setSelectedDistrict] = useState('');

 

//   useEffect(() => {
//     const transformData = (data) => {
//       return data.reduce((acc, item) => {
//         const { STATE, DISTRICT } = item;
//         if (!acc[STATE]) {
//           acc[STATE] = {
//             state: STATE,
//             districts: [],
//           };
//         }
//         acc[STATE].districts.push(DISTRICT);
//         return acc;
//       }, {});
//     };

//     const transformedData = Object.values(transformData(rawData));
//     setStates(transformedData);
//   }, []);

//   const handleStateChange = (event) => {
//     const stateName = event.target.value;
//     setSelectedState(stateName);
//     const state = states.find(s => s.state === stateName);
//     setDistricts(state ? state.districts : []);
//     setSelectedDistrict(''); // Reset district selection when state changes
//   };

//   const handleDistrictChange = (event) => {
//     setSelectedDistrict(event.target.value);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="form-group">
//         <label htmlFor="stateSelect">Select State</label>
//         <select
//           id="stateSelect"
//           className="form-control"
//           onChange={handleStateChange}
//           value={selectedState}
//         >
//           <option value="" disabled>Select State</option>
//           {states.map((state, index) => (
//             <option key={index} value={state.state}>{state.state}</option>
//           ))}
//         </select>
//       </div>

//       {selectedState && (
//         <div className="form-group">
//           <label htmlFor="districtSelect">Select District</label>
//           <select
//             id="districtSelect"
//             className="form-control"
//             onChange={handleDistrictChange}
//             value={selectedDistrict}
//           >
//             <option value="" disabled>Select District</option>
//             {districts.map((district, index) => (
//               <option key={`${selectedState}-${district}-${index}`} value={district}>{district}</option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;








import React, { useState, useEffect } from 'react';
import rawData from '../data/json-fixer.json';
import Load from '../assets/Bars.gif';
import { useAuth0 } from "@auth0/auth0-react";

const App = () => {
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [loading, setLoading] = useState(false);
  const [cropLoad, setcropLoad] = useState(false);
  const host = "http://localhost:3000";

  const { user, isAuthenticated, isLoading } = useAuth0();
  const months = [
    { name: 'January', number: 1 },
    { name: 'February', number: 2 },
    { name: 'March', number: 3 },
    { name: 'April', number: 4 },
    { name: 'May', number: 5 },
    { name: 'June', number: 6 },
    { name: 'July', number: 7 },
    { name: 'August', number: 8 },
    { name: 'September', number: 9 },
    { name: 'October', number: 10 },
    { name: 'November', number: 11 },
    { name: 'December', number: 12 }
  ];

  useEffect(() => {
    const transformData = (data) => {
      return data.reduce((acc, item) => {
        const { STATE, DISTRICT } = item;
        if (!acc[STATE]) {
          acc[STATE] = {
            state: STATE,
            districts: [],
          };
        }
        acc[STATE].districts.push(DISTRICT);
        return acc;
      }, {});
    };

    const transformedData = Object.values(transformData(rawData));
    setStates(transformedData);
  }, []);

  const handleStateChange = (event) => {
    const stateName = event.target.value;
    setSelectedState(stateName);
    const state = states.find(s => s.state === stateName);
    setDistricts(state ? state.districts : []);
    setSelectedDistrict(''); // Reset district selection when state changes
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const createUser = async (email) => {
    const response = await fetch(`${host}/api/auth/createUser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: email, name: user.name })
    });

    const json = await response.json();

    if (!json.success) {
      alert("INTERNAL SERVER ERROR");
    }
  }

  const handleClick = async () => {
    setcropLoad(true);

    await createUser(user.email);

    const response = await fetch(`${host}/api/rainprec/rainrecommend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: user.email, State: selectedState.toUpperCase(), Month: selectedMonth, District: selectedDistrict.toUpperCase() })
    });

    const json = await response.json();

    const newCrop = json;
    localStorage.setItem("rPrediction", newCrop.Prediction);

    let cropElement = document.getElementById('rainn');
    cropElement.innerText = `Result: ${newCrop.Prediction.toUpperCase()} mm of expected rainfall `;
    cropElement.classList.add('btn', 'btn-info', 'btn-lg');

    let newIcon = document.createElement('i');
    newIcon.classList.add('fa-solid', 'fa-cloud-showers-heavy');
    cropElement.appendChild(newIcon);

    setcropLoad(false);
  }

  return (
    <div className="container mt-5">
      {loading && <img src={Load} alt="Loading..." />}
      <div className="form-group">
        <label htmlFor="stateSelect">Select State</label>
        <select
          id="stateSelect"
          className="form-control"
          onChange={handleStateChange}
          value={selectedState}
        >
          <option value="" disabled>Select State</option>
          {states.map((state, index) => (
            <option key={index} value={state.state}>{state.state}</option>
          ))}
        </select>
      </div>

      {selectedState && (
        <div className="form-group">
          <label htmlFor="districtSelect">Select District</label>
          <select
            id="districtSelect"
            className="form-control"
            onChange={handleDistrictChange}
            value={selectedDistrict}
          >
            <option value="" disabled>Select District</option>
            {districts.map((district, index) => (
              <option key={`${selectedState}-${district}-${index}`} value={district}>{district}</option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="monthSelect">Select Month</label>
        <select
          id="monthSelect"
          className="form-control"
          onChange={handleMonthChange}
          value={selectedMonth}
        >
          <option value="" disabled>Select Month</option>
          {months.map((month) => (
            <option key={month.number} value={month.number}>{month.name}</option>
          ))}
        </select>
      </div>

      <div className="col-md-4 mb-3">
        <button className="btn btn-success my-2" type="submit" onClick={(e) => { e.preventDefault(); handleClick(); }}  >Predict Rainfall</button>
      </div>
      
      {cropLoad && <> 
        <p className='fa-fade' style={{ color: "blue" }} >Predicting Rainfall... </p>
        <img style={{ width: "20%" }} src={Load} alt="Loading..." />
      </>}

      <div className={cropLoad ? "d-none" : ""}>
        <p id="rainn"></p>
      </div>
    </div>
  );
};

export default App;
