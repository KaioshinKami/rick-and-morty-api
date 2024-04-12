import {ICharacters} from "@/api/types";


const Characters = ({characters}: {characters: ICharacters[]}) => {

    return (
        <div className='cartGrid'>
            {characters.map((character: ICharacters) => (
                <section key={character.id} className='cart'>
                    <div className='info'>
                        <img src={character.image} alt=""/>
                        <div className='paragraphs'>
                            <p>{character.name}</p>
                            <p>{character.status}</p>

                            <p className='pGray'>Last known location:</p>
                            <p>{character.origin.name}</p>

                            <p className='pGray'>Character location:</p>
                            <p>{character.location.name}</p>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Characters