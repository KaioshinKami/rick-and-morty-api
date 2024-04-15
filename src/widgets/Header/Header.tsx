import "./assets/header.css"
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className='header'>
            <Link to='/'>Characters</Link>
            <Link to='/episode'>Episodes</Link>
            <Link to='/location'>Locations</Link>
        </div>
    )
}

export default Header