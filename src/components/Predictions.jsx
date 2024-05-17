import React,{useEffect,useState} from 'react'
import Spinner from '../assets/Bars.gif'
import CropItem from './CropItem';
function Predictions() {

    
const [crop, setcrop] = useState([]);

const host = "http://localhost:3000";
const [load, setload] = useState(true)

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



const getCrops = async (mail)=>{

    await createUser('akshitt125@gmail.com');
  
      const response = await fetch( `${host}/api/crop/fetchallcrops`, {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          
         
        },
        body: JSON.stringify({email:mail})
      });
  
  const json = await response.json();
  
   setcrop(json);
   //console.log("i am running"+notes.length);
  }




useEffect(() => {
  
    const fetchData = async () => {
      
      await getCrops('akshitt125@gmail.com');
      setload(false);
    };
  
    fetchData();
  
  }, []);


  return (
    <>{load===true && <><img src={Spinner} className='my-5 mx-5 bg-transparent' style={{width:"20%"}} alt='LOADING...'></img></>}
       <div className="row my-5" >  
        { crop.length!==0  && load===false &&
         crop.map((crop) => {
          return <>
            <CropItem key={crop._id} crop={crop}  />
            </>;
        })
        }



      </div> 
    </>
  )
}

export default Predictions