import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../../widgets/Header/Header.tsx";
import {Link} from "react-router-dom";
import Button from "@/shared/Button/Button.tsx";

interface IEpisodes {
    id: number,
    name: string,
    air_date: string,
    characters: string
}

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

    const styles={
        cartGrid:{
            display:'grid',
            gridTemplateColumns:'repeat(4, 1fr)',
            gridRowGap:'20px'
        }
    }

    return (
        <>
            <Header/>

            <div style={styles.cartGrid}>
                {episodes.map((episodes: IEpisodes) => (
                    <section key={episodes.id} className='episode'>
                        <p>{episodes.name}</p>
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