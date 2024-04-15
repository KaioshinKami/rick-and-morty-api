import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Characters from "@/widgets/characters/Characters.tsx";
import Header from "@/widgets/Header/Header.tsx";
import {ICharacters} from "@/api/types";

const LocationDetails=()=>{

    const {id}=useParams()
    const [characters, setCharacters] = useState<ICharacters[]>([])
    const getLocationsCharacters= async ()=>{
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            const residentsUrl=response.data.residents

            const residentsMap=residentsUrl.map((url:string)=>(axios.get(url)))
            const residentResponse=await Promise.all(residentsMap)
            const residentData=residentResponse.map((res)=>res.data)

            setCharacters(residentData)
        }
        catch (e){
            console.log(e)}
    }
    useEffect(() => {
        getLocationsCharacters()
    }, []);
    
    return(
        <>
            <div>
                <Header />
                <Characters characters={characters} />
            </div>
        </>
    )
}

export default LocationDetails