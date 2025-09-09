import { Link } from 'react-router-dom'
import './header.css' 
function Header() {

    return(

        <nav>

                <ul className='ulStyle'>

                    <li><Link to="/checkbox" className={`linkStyle`}>Checkbox</Link></li>
                    <li><Link to="/home" className={`linkStyle`}>Home</Link></li>
                    <li><Link to="/emote" className={`linkStyle`}>Emote</Link></li>

                </ul>

        </nav>

    )

}

export default Header