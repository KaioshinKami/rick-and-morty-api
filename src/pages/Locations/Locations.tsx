import axios from "axios";
import {useEffect,useState} from "react";
import {ILocations} from "@/api/types";
import {Link} from "react-router-dom";
import "@/api/LocationApi/assets/LocationDetails.css"
import Header from "@/widgets/Header/Header.tsx";
import Button from "@/shared/Button/Button.tsx";

const Locations=()=>{
    const[locations, setLocations]=useState([])


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () =>{
        try {
            const response= await axios.get('https://rickandmortyapi.com/api/location')
            setLocations(response.data.results)
        }
        catch (e){
            console.log(e)
        }
    }
    return(
        <>
            <Header />
            <div className='cartGridEL'>
                {locations.map((location:ILocations)=>(
                    <section key={location.id} className='episodeAndLocation'>
                        <p>{location.id}.{location.name}</p>
                        <p>{location.type}</p>

                        <Link key={location.id} to={`/location/${location.id}`}>
                            <Button>Details</Button>
                        </Link>
                    </section>
                ))}
            </div>
            </>
    )
}

export default Locations