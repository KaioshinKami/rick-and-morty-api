import CharactersApi from "../../api/CharactersApi/CharactersApi.tsx";
import Header from "../../widgets/Header/Header.tsx";

const Characters =()=>{
    return(
        <>
            <Header/>
            <CharactersApi/>
        </>
    )
}

export default Characters