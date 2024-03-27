import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

import headerLogo from '../images/header-logo.jpeg'

import { ADMIN } from '../App'

const Navbar = ({
    mobileNav,
    userLogout,
    showFormCanvas,
    firstLink,
    secondLink,
    thirdLink,
    isLoading3,
}) => {
    const { user } = useAuthContext()

    return (
        <header>
            <div className="header-wrapper">
                <div className="header-flex">
                    <nav>
                        <div className="header-link-container">
                            {firstLink === '#welcome' ? (
                                <a href={firstLink}>Main </a>
                            ) : (
                                <Link to={firstLink}>Home</Link>
                            )}
                        </div>
                        <div className="header-link-container">
                            <Link to="/products">Products</Link>
                        </div>
                        <div className="header-link-container">
                            <a href={secondLink}>About Us</a>
                        </div>
                        <div className="header-link-container">
                            {user?.email === ADMIN ? (
                                <Link to="/admin">ADMIN</Link>
                            ) : (
                                <a href={thirdLink}>Contacts</a>
                            )}
                        </div>
                    </nav>
                    <div className="header-other">
                        <span className="lang-change">
                            <div className="header-lang-change-container">
                                <a>kz</a>
                            </div>
                            <b>|</b>
                            <div className="header-lang-change-container">
                                <a>ru</a>
                            </div>
                            <b>|</b>
                            <div className="header-lang-change-container">
                                <a>eng</a>
                            </div>
                        </span>
                        <div
                            className="burger-menu"
                            onClick={() =>
                                mobileNav.current.classList.toggle('is-active')
                            }
                        >
                            <i className="fa-solid fa-bars fa-2xl"></i>
                        </div>
                        <div id="header-circle">
                            <i className="fa-solid fa-magnifying-glass fa-2xl search-icon"></i>
                        </div>
                        {user && (
                            <div className="userDiv" id="userDivId">
                                <span>
                                    {user.email ? user.email : user.name}
                                </span>
                                <button
                                    onClick={userLogout}
                                    disabled={isLoading3}
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                        {!user && (
                            <button id="header-btn" onClick={showFormCanvas}>
                                Log in
                            </button>
                        )}
                    </div>
                </div>
                <img src={headerLogo} alt="logo" id="header-logo" />
            </div>
        </header>
    )
}

export default Navbar
