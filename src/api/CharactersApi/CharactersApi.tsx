import axios from 'axios'
import {useEffect, useState} from "react";
import './assets/style/charactersApi.css'
import {ICharacters} from "@/api/types";
import Characters from "@/widgets/characters/Characters.tsx";



const CharactersApi = () => {
    const [characters, setCharacters] = useState<ICharacters[]>([])


    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://rickandmortyapi.com/api/character')
            setCharacters(response.data.results)
        } catch (error) {
            console.log(error)
        }

    }

    return (
        // <div className='cartGrid'>
        //     {characters.map((character: ICharacters) => (
        //         <section key={character.id} className='cart'>
        //             <div className='info'>
        //                 <img src={character.image} alt=""/>
        //                 <div className='paragraphs'>
        //                     <p>{character.name}</p>
        //                     <p>{character.status}</p>
        //
        //                     <p className='pGray'>Last known location:</p>
        //                     <p>{character.origin.name}</p>
        //
        //                     <p className='pGray'>Character location:</p>
        //                     <p>{character.location.name}</p>
        //                 </div>
        //             </div>
        //         </section>
        //     ))}
        // </div>
        <div>
            <Characters characters={characters}/>
        </div>
    );
}

export default CharactersApi