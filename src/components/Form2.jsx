import React,{useState,useEffect} from 'react'

export default function Form2() {

        
    const [Loading, setLoading] = useState(null)
    const [longitude, setlongitude] = useState(null)
    const [latitude, setlatitude] = useState(null)
    const [temp, settemp] = useState(null)
    const [rain, setrain] = useState(null)
    const [humid, sethumid] = useState(null)

    function handleGetLocation (){
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
    
                // Set state for latitude and longitude if needed elsewhere in your component
                setlatitude(position.coords.latitude);
                setlongitude(position.coords.longitude);
                    setLoading(true);
                // Call getData directly with the obtained coordinates
                await getData(position.coords.longitude, position.coords.latitude);
                setLoading(false);
            }, (error) => {
                console.error("Error Code = " + error.code + " - " + error.message);
                window.alert("Error Code = " + error.code + " - " + error.message);
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
            window.alert("Geolocation is not supported by this browser.");
        }
    };




    


    const getData = async (longitude, latitude) => {
        const apiKey = 'c6d93363baf641e283774714242602'; // Replace with your API key
        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;
    
        try {
            setLoading(true); // Set loading to true before fetching data
    
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`); // Throw an error for non-2xx responses
            }
            const data = await response.json();
    
            console.log(data);
            const temperature = data.current.temp_c; // Temperature in Celsius
            const humidity = data.current.humidity; // Humidity percentage
            const precipitation = data.current.precip_mm; // Precipitation in millimeters
            console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%, Precipitation: ${precipitation}mm`);
    
            // Update state with fetched data
            sethumid(humidity);
            settemp(temperature);
            setrain(precipitation);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        } finally {
            setLoading(false); // Ensure loading is set to false when the fetch is complete
        }
    };
    

    useEffect(() => {

    }, [Loading])
    
      


    return (
        <div>
            <form>
                <div className="form-row">
                <div className="col-md-4 mb-3">
                        <label htmlFor="getLocationButton">Get Location <i className="fa-solid fa-location-dot"></i> </label>
                        <input type="button" className="form-control" id="getLocationButton" value="Get Location" required onClick={handleGetLocation} />
                        {Loading!==null && !Loading && <>
                        <p>Temperature in  Celcius {temp}  <br/>
                        Humidity is {humid} %<br/>
                        Rainfall is {rain} mm </p>
                        </> }
                        {
                           Loading!==null && Loading===true && <p className='fa-fade'>Loading....</p>
                        }

                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault01">Nitrogen</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nitrogen" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Potassium</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Potassium" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Phosphorus</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Phosphorus" value="" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                        <select className="custom-select">
                            <option selected>Type of Soil</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="custom-select custom-select-lg mb-3">
                        <select className="custom-select">
                            <option selected>Type of Crop</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                  
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">pH</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="" value="" required/>
                    </div>

                </div>
                <button className="btn btn-primary" type="submit">Submit form</button>
            </form>
        </div>
    )
}
