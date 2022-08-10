import NavHomeBtn from './NavHomeBtn'
import NavAllServBtn from './NavAllServBtn'
import NavFindAProBtn from './NavFindAProBtn'
import NavSignUpBtn from './NavSignUpBtn '
import NavLoginBtn from './NavLoginBtn'
import NavBeAProBtn from './NavBeAProBtn'

const Header = () => {
    return (
        <header className="header-container">
            <div className="center-container">
                <div className="logoDiv">
                    <img id="logo" className="logo" src="images/logo.png" />
                    <div><h4>ServicesToYou</h4></div>
                </div>

                <nav role="navigation">
                    <ul className="nav">
                        <NavHomeBtn />
                        <NavAllServBtn />
                        <NavSignUpBtn />
                        <NavLoginBtn />
                        <NavFindAProBtn />
                        <NavBeAProBtn />
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header