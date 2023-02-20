import logo from '../assets/logo.png'
import '../styles/Banner.css'

function Banner() {
	return (
        <div className='banner'>
            <img src={logo} alt='Logo du site Kasa' />
            <nav>
                <ul>
                    <li>Accueil</li>
                    <li>A Propos</li>
                </ul>
            </nav>
        </div>
    )
}

export default Banner