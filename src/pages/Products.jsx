import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useProductsContext } from '../hooks/useProductsContext'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'
import ProductDetails from '../components/ProductDetails'
import Navbar from '../components/Navbar'
import { URL, ADMIN } from '../App'

import footerLogo from '../images/footer-logo.svg'

const Products = () => {
    const { products, dispatch } = useProductsContext()
    const { user } = useAuthContext()
    const { logout } = useLogout()

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(`${URL}/products`, {
                headers: { Authorization: `bearer ${user.token}` },
            })
            const json = await response.json()

            if (response.ok) {
                dispatch({ type: 'SET_PRODUCTS', payload: json })
            }
        }

        if (user) {
            fetchProducts()
        }
    }, [dispatch, user])

    const mobileNav = useRef()

    const userLogout = () => {
        logout()
    }

    return (
        <>
            <Navbar
                mobileNav={mobileNav}
                userLogout={userLogout}
                showFormCanvas={null}
                firstLink={'/'}
                secondLink={null}
                thirdLink={null}
            />
            <main>
                <div className="products-home">
                    <div className="products-div">
                        {products &&
                            products.map((product) => (
                                <ProductDetails
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                    </div>
                </div>
            </main>
            <footer id="footer">
                <div className="footer-wrapper">
                    <div className="footer-flex">
                        <div className="footer-logo">
                            <img src={footerLogo} alt="logo" />
                            <h2>TamaqDana</h2>
                        </div>
                        <div className="footer-info">
                            <h2>Navigation</h2>
                            <ul>
                                <li>
                                    <a>About us</a>
                                </li>
                                <li>
                                    <a>Service</a>
                                </li>
                                <li>
                                    <a>Menu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>Resources</h2>
                            <ul>
                                <li>
                                    <a>Reviews</a>
                                </li>
                                <li>
                                    <a>Blog</a>
                                </li>
                                <li>
                                    <a>Update News</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>Contact Us</h2>
                            <p>Email: tamaqdana@gmail.com</p>
                            <div className="footer-social-media">
                                <i
                                    className="fa-brands fa-facebook-f fa-2xl"
                                    id="facebook"
                                ></i>
                                <i
                                    className="fa-brands fa-twitter fa-2xl"
                                    id="twitter"
                                    onClick={() =>
                                        window.open(
                                            'https://twitter.com/TamaqDana?t=HSZQZSzPRKyGK7KWiT0zPQ&s=08',
                                            '_blank'
                                        )
                                    }
                                ></i>
                                <i
                                    className="fa-brands fa-instagram fa-2xl"
                                    id="insta"
                                    onClick={() =>
                                        window.open(
                                            'https://instagram.com/tamaqdana?igshid=MzRlODBiNWFlZA==',
                                            '_blank'
                                        )
                                    }
                                ></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="mobile-nav" ref={mobileNav}>
                <div className="nav-close">
                    <i
                        className="fa-solid fa-xmark fa-2xl"
                        id="mobile-nav-close"
                        onClick={() =>
                            mobileNav.current.classList.toggle('is-active')
                        }
                    ></i>
                </div>
                <Link to="/">Home</Link>
                <a>Service</a>
                <a>About Us</a>
                {user?.email === ADMIN ? (
                    <Link to="/admin">ADMIN</Link>
                ) : (
                    <a>Contacts</a>
                )}
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
                {user && (
                    <div className="userDiv">
                        <span>{user.email}</span>
                        <button onClick={userLogout}>Log out</button>
                    </div>
                )}
                {!user && <button id="nav-btn">Log in</button>}
            </div>
        </>
    )
}

export default Products
