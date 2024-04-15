import {ICharacters} from "@/api/types";
import {Link} from "react-router-dom";
import "@/widgets/characters/assets/characters.css"
const Characters = ({characters}: {characters: ICharacters[]}) => {

    const status = (charStatus: string) => {
        if (charStatus === 'Alive') {
            return <div className='alive'>Alive</div>;
        } else if(charStatus==='Dead'){
            return <div className='dead'>Dead</div>
        } else{
            return <div className='unkn'>Unknown</div>
        }
    };

    return (
        <div className='cartGrid'>
            {characters.map((character: ICharacters) => (
                <section key={character.id} className='cart'>
                    <div className='info'>
                        <img src={character.image} alt=""/>
                        <div className='paragraphs'>
                            <Link key={character.id} to={`/character/${character.id}`}>
                                <p>{character.name}</p>
                            </Link>
                            <p className='pWhite1'>{status(character.status)}- {character.species}</p>

                            <p className='pGray'>Last known location:</p>
                            <p className='pWhite'>{character.origin.name}</p>

                            <p className='pGray'>Character location:</p>
                            <p className='pWhite'>{character.location.name}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Characters