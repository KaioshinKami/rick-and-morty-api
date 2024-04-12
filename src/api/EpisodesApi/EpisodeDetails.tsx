import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Header from "../../widgets/Header/Header.tsx";
import {ICharacters} from "@/api/types";

import "./assets/episodeDetails.css"
import Characters from "@/widgets/characters/Characters.tsx";

const EpisodeDetails = () => {
    const {id} = useParams()
    const [characters, setCharacters] = useState<ICharacters[]>([])

    useEffect(() => {
        getCharacters()
    }, [id]);

    const getCharacters = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/episode/${id}`);
            const charactersUrls = response.data.characters;

            const mapCharacters = charactersUrls.map((url: string) => axios.get(url));
            const characterResponse = await Promise.all(mapCharacters);
            const characterData = characterResponse.map((res) => res.data);

            console.log(charactersUrls)
            console.log(mapCharacters)
            console.log(characterResponse)
            console.log(characterData)

            setCharacters(characterData);
        } catch (e) {
            console.log("Error!", e);
        }
    };


    return (
        <>
            <Header/>
            {/*<div className='carts'>*/}
            {/*    {characters.map((character: ICharacters) => (*/}
            {/*        <section key={character.id} className='section-grid'>*/}
            {/*            <img src={character.image} alt="img" className='characterImg'/>*/}
            {/*            <div className='paragraphs'>*/}
            {/*                <p>{character.name}</p>*/}
            {/*                <p>{character.status}</p>*/}

            {/*                <p className='pGray'>Last known location:</p>*/}
            {/*                <p>{character.origin.name}</p>*/}

            {/*                <p className='pGray'>Character location:</p>*/}
            {/*                <p>{character.location.name}</p>*/}
            {/*            </div>*/}
            {/*        </section>*/}
            {/*    ))}*/}
            {/*</div>*/}
            <Characters characters={characters}/>
        </>
    )
}
export default EpisodeDetails