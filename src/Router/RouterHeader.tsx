import {Routes, Route} from "react-router-dom";
import Characters from "../pages/Characters/Characters.tsx";
import EpisodePage from "../pages/Episodes/EpisodePage.tsx";
import EpisodeDetails from "../api/EpisodesApi/EpisodeDetails.tsx";

const RouterHeader=()=>{
    return(
        <>
          <Routes>
              <Route path='/' element={<Characters />} />
              <Route path='/episode' element={<EpisodePage />} />
              <Route path='/episode/:id' element={<EpisodeDetails/>}/>
          </Routes>
        </>
    )
}

export default RouterHeader