import "./assets/header.css"
import {Link} from "react-router-dom";

const Header=()=>{
    return(
        <div className='header'>
            <Link to='/'>Character</Link>
            <Link to='/episode'>Episodes</Link>
            <Link to='/Loction'>Location</Link>
        </div>
    )
}

export default Header