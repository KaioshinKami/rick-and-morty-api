import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../../widgets/Header/Header.tsx";
import {Link} from "react-router-dom";
import Button from "@/shared/Button/Button.tsx";
import {IEpisodes} from "@/api/types";
import "@/pages/Episodes/assets/episodePage.css"

const EpisodePage = () => {
    const [episodes, setEpisodes] = useState<IEpisodes[]>([])

    useEffect(() => {
        fetchDataEpisode()
    }, [],);


    const fetchDataEpisode = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/episode')
            setEpisodes(response.data.results)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Header/>

            <div className='cartGridEL'>
                {episodes.map((episodes: IEpisodes) => (
                    <section key={episodes.id} className='episodeAndLocation'>
                        <p>{episodes.id}.{episodes.name}</p>
                        <p>{episodes.air_date}</p>
                        <Link key={episodes.id} to={String(episodes.id)}>
                            <Button>Details</Button>
                        </Link>
                    </section>
                ))}
            </div>
        </>
    )
}

export default EpisodePage