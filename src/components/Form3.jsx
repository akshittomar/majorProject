import React, { useState } from 'react';

const Form3 = () => {
  const [location, setLocation] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleLocationButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };

  const handleMonthSelectChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform any action with the collected data here
    setSubmittedData({
      location,
      selectedMonth,
    });
  };

  return (
    <div>
      <button onClick={handleLocationButtonClick}>
        Get Location
      </button>

      {location && (
        <p>
          Location: {location.latitude}, {location.longitude}
        </p>
      )}

      <label>
        Select Month:
        <select value={selectedMonth} onChange={handleMonthSelectChange}>
          <option value="" disabled>
            Select a month
          </option>
          <option value="January">January</option>
          <option value="February">February</option>
          <option value="March">March</option>
          {/* ... Repeat for other months ... */}
        </select>
      </label>

      <button onClick={handleSubmit}>
        Submit
      </button>

      {submittedData && (
        <div>
          <h3>Submitted Data:</h3>
          <p>Location: {location.latitude}, {location.longitude}</p>
          <p>Selected Month: {selectedMonth}</p>
        </div>
      )}
    </div>
  );
};

export default Form3;
