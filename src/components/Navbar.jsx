import {Link} from "react-router-dom"
import logo from '../assets/logo.png'
import '../styles/Navbar.css'

function Banner() {
	return (
        <div className='banner'>
            <img src={logo} alt='Logo du site Kasa' />
            <nav>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="/about"><li>A Propos</li></Link>
                </ul>
            </nav>
        </div>
    )
}

export default Banner