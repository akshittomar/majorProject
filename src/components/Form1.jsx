import React,{useState,useEffect} from 'react'

export default function Form1(props) {

    const host = "http://localhost:3000";

    const handlechange = props.handleChange;
    const change = props.change; 

    const [ph, setph] = useState(null)
    const [Phosphorus, setPhosphorus] = useState(null);
    const [nitrogen, setnitrogen] = useState(null)
    const [potassium, setpotassium] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [longitude, setlongitude] = useState(null)
    const [latitude, setlatitude] = useState(null)
    const [state, setstate] = useState(null)
    const [temp, settemp] = useState(null)
    const [rain, setrain] = useState(null)
    const [humid, sethumid] = useState(null)
    const [condition, setcondition] = useState(null)
    const [crop, setcrop] = useState(null);
    
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
    
    const handleNitrogenChange = (event) => {
        setnitrogen(event.target.value); // Update the nitrogen state with the new input value
    };


    const handlePotassiumChange = (event) => {
        setpotassium(event.target.value); // Update the nitrogen state with the new input value
    };

    const handlePhosChange = (event) =>{
            setPhosphorus(event.target.value);
    }

    const handlephChange = (event) =>{
            setph(event.target.value);
    }


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
                var stateName = data.location.region+", "+data.location.name;
                setstate(stateName);
                console.log(`Temperature: ${temperature}°C, Humidity: ${humidity}%, Precipitation: ${precipitation}mm , State name : ${ data.location.region} `);
                setcondition(data.current.condition);
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




        const createUser = async (email)=>{

      
  
    
            const response = await fetch( `${host}/api/auth/createUser`, {
              method: 'POST',
              headers:{
                'Content-Type':'application/json',
                
              },
              body: JSON.stringify({email:email,name:"Akshit"})
            });
        
            const json = await response.json();
            
            if(json.success===true){
              console.log("chaldiya mai");
             
             }
            else
            {
              //console.log(json.error);
            alert("INTERNAL SERVER ERROR");
            
            
            // navigate("/sign-up");
            }
        
        }
        
        



        const handleClick= async()=> {


                const predection = "Assumed Result";
                console.log(nitrogen+" "+potassium+" "+ph+" "+Phosphorus+" "+rain+" "+temp+" "+humid+" "+predection)            ;


                

                    await createUser("akshitt125@gmail.com");
                    //console.log("PARAMETERS OF ADD NOTE"+title+" "+description+" "+tag);
                
                
                    const response = await fetch( `${host}/api/crop/addcrop`, {
                      method: 'POST',
                      headers:{
                        'Content-Type':'application/json',
                       
                      },
                      body: JSON.stringify({email:"akshitt125@gmail.com",rain:rain,temp:temp,humid:humid,nitro:nitrogen,p:Phosphorus,k:potassium,prediction:predection})
                    });
                
                    const json = await response.json(email,rain,temp,humid,nitro,p,k,predection);
                
                
                
                 const   newCrop = json ;
                setcrop(crop.concat(newCrop));
                
                  setPhosphorus("");
                  sethumid(0);
                  setPhosphorus(0);
                  setpotassium(0);
                  setph(0);
                  setnitrogen(0);
                   setstate(state+""); 
                props.handleChange();

                
                
        }
        

        useEffect(() => {

        }, [Loading,state,Phosphorus,humid,Phosphorus,potassium,ph,nitrogen,change])


        useEffect(() => {
          
            setPhosphorus("");
            sethumid(0);
            setPhosphorus(0);
            setpotassium(0);
            setph(0);
            setnitrogen(0);
             setstate(state+""); 
          return () => {
            setPhosphorus("");
            sethumid(0);
            setPhosphorus(0);
            setpotassium(0);
            setph(0);
            setnitrogen(0);
             setstate(state+""); 
          }
        }, [crop])
        
        
          {/*
        1.temperature 
        2.humidity
        3.rainfall----> state , month 
        4.nitrogen
        */ }
    
    return (
        <div>
            <form>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label htmlFor="getLocationButton">Get Weather <i className="fa-solid fa-sun fa-spin "></i> </label>
                        <input type="button" className="form-control" id="getLocationButton" value="Get Weather" required onClick={handleGetLocation} />
                        {Loading!==null && !Loading && <>
                        <p>
                        <i className="fa-solid fa-map-pin fa-fade"></i> {state} <br/>    
                        {"It's "+condition.text} <img style={{width:"25%"}}  src={condition.icon}/>  <br/>
                        <i className="fa-solid fa-temperature-three-quarters fa-xl "></i> : {temp}°C  <br/>
                        <i className="fa-solid fa-droplet fa-lg"></i> : {humid} %<br/>
                        <i className="fa-solid fa-cloud-bolt fa-lg"></i > : {rain} mm <br/>
                       
                        </p>
                        </> }
                        {
                           Loading!==null && Loading===true && <p className='fa-fade'>Loading....</p>
                        }

                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault01">Nitrogen</label>
                        <input type="text" className="form-control" id="validationDefault01" placeholder="Nitrogen" onChange={handleNitrogenChange} value={nitrogen} required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Potassium</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Potassium" onChange={handlePotassiumChange} value={potassium} required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">Phosphorus</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="Phosphorus" value={Phosphorus} onChange={handlePhosChange} required />
                    </div>
                   
                    <div className="col-md-4 mb-3">
                        <label htmlFor="validationDefault02">pH</label>
                        <input type="text" className="form-control" id="validationDefault02" placeholder="pH" value={ph} onChange={handlephChange}  required />
                    </div>
                    <div className="col-md-4 mb-3">
                        <button className="btn btn-primary" type="submit" onClick={(e)=>{e.preventDefault();handleClick();handlechange();}}  >Submit form</button>
                    </div>
                </div>
            </form >
        </div >
    )
}
