import {Routes, Route} from "react-router-dom";
import Characters from "../pages/Characters/Characters.tsx";
import EpisodePage from "../pages/Episodes/EpisodePage.tsx";
import EpisodeDetails from "../api/EpisodesApi/EpisodeDetails.tsx";
import Locations from "@/pages/Locations/Locations.tsx";
import LocationDetails from "@/api/LocationApi/LocationDetails.tsx";
import CharacterDetails from "@/api/CharactersApi/CharacterDetails.tsx";

const RouterHeader=()=>{
    return(
        <>
          <Routes>
              <Route path='/' element={<Characters />} />
              <Route path='/character/:id' element={<CharacterDetails/>} />
              <Route path='/episode' element={<EpisodePage />} />
              <Route path='/episode/:id' element={<EpisodeDetails/>}/>
              <Route path='/location' element={<Locations/>} />
              <Route path='/location/:id' element={<LocationDetails/>} />
          </Routes>
        </>
    )
}

export default RouterHeader