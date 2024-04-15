import axios from "axios";
import {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "@/widgets/Header/Header.tsx";
import Button from "@/shared/Button/Button.tsx";
import {IEpisodes} from "@/api/types";

const CharacterDetails=()=>{
    const [episodes, setEpisodes]=useState<IEpisodes[]>([])

    const {id}=useParams()

    useEffect(() => {
        getCharactersDetail()
    }, [id]);

    const getCharactersDetail= async ()=>{
        try {
            const response= await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            const result=response.data.episode

            const resultMap=result.map((url:string)=>(axios.get(url)))
            const resultResponse=await Promise.all(resultMap)
            const resultData=resultResponse.map((res:string)=>res.data)

            setEpisodes(resultData)
        }
        catch (e){
            console.log(e)
        }
    }

    const styles={
        cartGrid:{
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)',
            gridRowGap:'20px'
        }
    }
    return(
        <>
            <Header/>

            <div className='cartGridEL'>
                {episodes.map((episodes:IEpisodes) => (
                    <section key={episodes.id} className='episodeAndLocation'>
                        <p>{episodes.id}.{episodes.name}</p>
                        <p>{episodes.air_date}</p>
                        <Link key={episodes.id} to={`/episode/${episodes.id}`}>
                            <Button>Details</Button>
                        </Link>

                    </section>
                ))}
            </div>
        </>
    )
}

export default CharacterDetails