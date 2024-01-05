import { useEffect, useRef, useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { useLogin } from '../hooks/useLogin'
import { useAuthContext } from '../hooks/useAuthContext'
import { useLogout } from '../hooks/useLogout'

import headerLogo from '../images/header-logo.svg'
import welcomeLeaves from '../images/welcome-leaves.svg'
import welcomeVeg from '../images/welcome-veg.png'
import welcomeUsers from '../images/weclome-users.svg'
import welcomeReviews from '../images/welcome-reviews.svg'
import welcomeProducts from '../images/welcome-products.svg'
import secondAdv from '../images/second-adv.svg'
import thirdAdv from '../images/third-adv.svg'
import advMain from '../images/adv-main.PNG'
import explore from '../images/explore.svg'
import testimonialsStars from '../images/testimonials-stars.svg'
import testimonialsPerson from '../images/testimonials-person.PNG'
import downloadPhone from '../images/download-phone.PNG'
import downloadAppstore from '../images/download-appstore.svg'
import downloadGoogleplay from '../images/download-googleplay.svg'
import footerLogo from '../images/footer-logo.svg'

const Home = () => {
    const [email1, setEmail1] = useState('')
    const [password1, setPassword1] = useState('')
    const [email2, setEmail2] = useState('')
    const [password2, setPassword2] = useState('')
    const { error1, isLoading1, signup } = useSignup()
    const { error2, isLoading2, login } = useLogin()
    const { user } = useAuthContext()
    const { logout } = useLogout()

    const checkbox = useRef()
    const formCanvas = useRef()

    const handleSubmit1 = async (e) => {
        e.preventDefault()

        await signup(email1, password1)
    }

    const handleSubmit2 = async (e) => {
        e.preventDefault()

        const checked = checkbox.current.checked

        await login(email2, password2, checked)
    }

    const userLogout = () => {
        logout()
    }

    useEffect(() => {
        if (user) {
            hideFormCanvas()
            setEmail1('')
            setPassword1('')
            setEmail2('')
            setPassword2('')
        }
    }, [user])

    const showFormCanvas = () => {
        if (!user) {
            formCanvas.current.style.display = 'block'
        }
    }

    const hideFormCanvas = () => {
        formCanvas.current.style.display = 'none'
    }

    const firstLink = useRef()
    const secondLink = useRef()
    const signupTabContent = useRef()
    const loginTabContent = useRef()

    const signupTab = (e) => {
        e.preventDefault()
        secondLink.current.classList.remove('active')
        firstLink.current.classList.add('active')

        loginTabContent.current.classList.remove('active')
        signupTabContent.current.classList.add('active')
    }

    const loginTab = (e) => {
        e.preventDefault()
        firstLink.current.classList.remove('active')
        secondLink.current.classList.add('active')

        signupTabContent.current.classList.remove('active')
        loginTabContent.current.classList.add('active')
    }

    const mobileNav = useRef()

    let n = 0
    const sliderWrapper = useRef()
    const leftCircle = useRef()
    const rightCircle = useRef()
    const right = () => {
        if (n % 4 === 0) {
            sliderWrapper.current.style.left = '-100vw'
            n++
        } else if (n % 4 === 1) {
            sliderWrapper.current.style.left = '-200vw'
            n++
        } else if (n % 4 === 2) {
            sliderWrapper.current.style.left = '-300vw'
            n++
        } else if (n >= 3) {
            sliderWrapper.current.style.left = '0vw'
            n = 0
        }

        rightCircle.current.style.color = 'white'
        rightCircle.current.style.border = 'none'
        rightCircle.current.style.background = '#09A66D'

        leftCircle.current.style.color = '#CCCCCC'
        leftCircle.current.style.border = '2px solid #CCCCCC'
        leftCircle.current.style.background = 'none'
    }
    const left = () => {
        if (n <= 0) {
            sliderWrapper.current.style.left = '-300vw'
            n = 3
        } else if (n % 4 === 3) {
            sliderWrapper.current.style.left = '-200vw'
            n--
        } else if (n % 4 === 2) {
            sliderWrapper.current.style.left = '-100vw'
            n--
        } else if (n % 4 === 1) {
            sliderWrapper.current.style.left = '0'
            n--
        }

        leftCircle.current.style.color = 'white'
        leftCircle.current.style.border = 'none'
        leftCircle.current.style.background = '#09A66D'

        rightCircle.current.style.color = '#CCCCCC'
        rightCircle.current.style.border = '2px solid #CCCCCC'
        rightCircle.current.style.background = 'none'
    }

    return (
        <>
            <header>
                <div className="header-wrapper">
                    <div className="header-flex">
                        <nav>
                            <div className="header-link-container">
                                <a href="#welcome">Main</a>
                            </div>
                            <div className="header-link-container">
                                <a href="#explore">Explore</a>
                            </div>
                            <div className="header-link-container">
                                <a href="#testimonials">About Us</a>
                            </div>
                            <div className="header-link-container">
                                <a href="#footer">Contacts</a>
                            </div>
                        </nav>
                        <div className="header-other">
                            <span className="lang-change">
                                <div className="header-lang-change-container">
                                    <a href="#">kz</a>
                                </div>
                                <b>|</b>
                                <div className="header-lang-change-container">
                                    <a href="#">ru</a>
                                </div>
                                <b>|</b>
                                <div className="header-lang-change-container">
                                    <a href="#">eng</a>
                                </div>
                            </span>
                            <div
                                className="burger-menu"
                                onClick={() =>
                                    mobileNav.current.classList.toggle(
                                        'is-active'
                                    )
                                }
                            >
                                <i className="fa-solid fa-bars fa-2xl"></i>
                            </div>
                            <div id="header-circle">
                                <i className="fa-solid fa-magnifying-glass fa-2xl search-icon"></i>
                            </div>
                            {user && (
                                <div className="userDiv" id="userDivId">
                                    <span>{user.email}</span>
                                    <button onClick={userLogout}>
                                        Log out
                                    </button>
                                </div>
                            )}
                            {!user && (
                                <button
                                    id="header-btn"
                                    onClick={showFormCanvas}
                                >
                                    Log in
                                </button>
                            )}
                        </div>
                    </div>
                    <img src={headerLogo} alt="logo" id="header-logo" />
                </div>
            </header>
            <main>
                <section id="welcome">
                    <div className="welcome-wrapper">
                        <img
                            src={welcomeLeaves}
                            alt="leaves"
                            id="welcome-leaves"
                        />
                        <div className="welcome-text">
                            <h1>Tamaq</h1>
                            <p>
                                Our service will help you quickly and accurately
                                determine the composition of food for a healthy
                                lifestyle!
                            </p>
                            <div className="welcome-btn">
                                <span>Register Now</span>
                                <div
                                    id="welcome-circle"
                                    onClick={showFormCanvas}
                                >
                                    <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
                                </div>
                            </div>
                        </div>
                        <div className="welcome-flex">
                            <img
                                src={welcomeVeg}
                                alt="vegies"
                                id="welcome-veggies"
                            />
                            <div className="welcome-boxes">
                                <div className="box">
                                    <img src={welcomeUsers} alt="users" />
                                    <div className="box-text">
                                        <h2>30K</h2>
                                        <p>Users</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src={welcomeReviews} alt="star" />
                                    <div className="box-text">
                                        <h2>20K</h2>
                                        <p>Reviews(4.8)</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <img src={welcomeProducts} alt="Products" />
                                    <div className="box-text">
                                        <h2>300</h2>
                                        <p>Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="adv">
                    <div className="adv-wrapper">
                        <div
                            className="adv-text wow animate__animated animate__fadeInDown"
                            data-wow-delay="0.1s"
                        >
                            <h1>Why We Are The Best?</h1>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a
                                galley...
                            </p>
                        </div>
                        <div className="adv-flex">
                            <div className="adv-col">
                                <div
                                    className="adv wow animate__animated animate__fadeInLeft"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="adv-circle">
                                        <i className="fa-solid fa-magnifying-glass fa-2xl search-icon"></i>
                                    </div>
                                    <div className="adv-card-text">
                                        <h2>Independent researches</h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="adv wow animate__animated animate__fadeInLeft"
                                    data-wow-delay="0.2s"
                                >
                                    <img
                                        src={secondAdv}
                                        alt="pic"
                                        style={{ width: '80px' }}
                                    />
                                    <div className="adv-card-text">
                                        <h2>
                                            Wide coverage of market products
                                        </h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </p>
                                    </div>
                                </div>
                                <div
                                    className="adv wow animate__animated animate__fadeInLeft"
                                    data-wow-delay="0.3s"
                                >
                                    <div className="adv-circle">
                                        <img src={thirdAdv} alt="pic" />
                                    </div>
                                    <div className="adv-card-text">
                                        <h2>24/8 Service</h2>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and typesetting
                                            industry.
                                        </p>
                                    </div>
                                </div>
                                <i
                                    className="fa-solid fa-arrow-down-long fa-2xl wow animate__animated animate__fadeIn"
                                    data-wow-delay="0.3s"
                                    id="adv-main-arrow"
                                ></i>
                            </div>
                            <img src={advMain} alt="pic" id="adv-main" />
                        </div>
                    </div>
                </section>
                <section id="explore">
                    <div className="explore-wrapper">
                        <div className="explore-flex">
                            <img
                                src={explore}
                                alt="pic"
                                className="wow animate__animated animate__fadeInLeft"
                                data-wow-delay="0.2s"
                            />
                            <div
                                className="explore-text wow animate__animated animate__fadeInRight"
                                data-wow-delay="0.2s"
                            >
                                <h1>
                                    Explore Our Special <br />
                                    Items
                                </h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy
                                    text ever since the 1500s, when an unknown
                                    printer...
                                </p>
                                <div id="explore-btn">
                                    <span id="explore-span">Explore Now</span>
                                    <div id="explore-circle">
                                        <i className="fa-solid fa-arrow-right-long fa-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            src={welcomeLeaves}
                            alt="leaves"
                            id="explore-leaves"
                        />
                    </div>
                </section>
                <section id="testimonials">
                    <div className="slider-container">
                        <div className="slider-wrapper" ref={sliderWrapper}>
                            <div className="slider-box">
                                <div className="slider-text">
                                    <h1>What Our Customers saying About Us</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was popularis
                                    </p>
                                    <h2>Ahmed Hridoy</h2>
                                    <img src={testimonialsStars} alt="stars" />
                                </div>
                                <img src={testimonialsPerson} alt="user" />
                            </div>
                            <div className="slider-box">
                                <div className="slider-text">
                                    <h1>What Our Customers saying About Us</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was popularis
                                    </p>
                                    <h2>Ahmed Hridoy</h2>
                                    <img src={testimonialsStars} alt="stars" />
                                </div>
                                <img src={testimonialsPerson} alt="user" />
                            </div>
                            <div className="slider-box">
                                <div className="slider-text">
                                    <h1>What Our Customers saying About Us</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was popularis
                                    </p>
                                    <h2>Ahmed Hridoy</h2>
                                    <img src={testimonialsStars} alt="stars" />
                                </div>
                                <img src={testimonialsPerson} alt="user" />
                            </div>
                            <div className="slider-box">
                                <div className="slider-text">
                                    <h1>What Our Customers saying About Us</h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the
                                        printing and typesetting industry. Lorem
                                        Ipsum has been the industry's standard
                                        dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type
                                        and scrambled it to make a type specimen
                                        book. It has survived not only five
                                        centuries, but also the leap into
                                        electronic typesetting, remaining
                                        essentially unchanged. It was popularis
                                    </p>
                                    <h2>Ahmed Hridoy</h2>
                                    <img src={testimonialsStars} alt="stars" />
                                </div>
                                <img src={testimonialsPerson} alt="user" />
                            </div>
                        </div>
                        <div className="slider-flex">
                            <div
                                className="testimonials-circle"
                                id="left-arrow"
                                onClick={left}
                                ref={leftCircle}
                            >
                                <i className="fa-solid fa-greater-than"></i>
                            </div>
                            <div
                                className="testimonials-circle"
                                id="right-arrow"
                                onClick={right}
                                ref={rightCircle}
                            >
                                <i className="fa-solid fa-greater-than"></i>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="download">
                    <div className="download-wrapper">
                        <div className="download-flex">
                            <img
                                src={downloadPhone}
                                alt="phone"
                                className="wow animate__animated animate__fadeIn"
                                data-wow-delay="0.3s"
                            />
                            <div
                                className="download-text wow animate__animated animate__fadeIn"
                                data-wow-delay="0.3s"
                            >
                                <button>Download App</button>
                                <h1>
                                    Simple Way To Analyze Your Daily Products
                                </h1>
                                <p>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting <br />
                                    industry. Lorem Ipsum has been the
                                    industry's standard dummy text <br />
                                    ever since the 1500s, when an unknown
                                    printer...
                                </p>
                                <img src={downloadAppstore} alt="appstore" />
                                <img
                                    src={downloadGoogleplay}
                                    alt="googleplay"
                                />
                            </div>
                        </div>
                    </div>
                </section>
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
                                    <a href="#">About us</a>
                                </li>
                                <li>
                                    <a href="#">Service</a>
                                </li>
                                <li>
                                    <a href="#">Menu</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>Resources</h2>
                            <ul>
                                <li>
                                    <a href="#">Reviews</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Update News</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-info">
                            <h2>Contact Us</h2>
                            <p>
                                Email: tamaqdana@gmail.com <br />
                                Tel: + 7 700 270 66 17
                            </p>
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
                <a href="#">Products</a>
                <a href="#">Service</a>
                <a href="#">About Us</a>
                <a href="#">Contacts</a>
                <span className="lang-change">
                    <div className="header-lang-change-container">
                        <a href="#">kz</a>
                    </div>
                    <b>|</b>
                    <div className="header-lang-change-container">
                        <a href="#">ru</a>
                    </div>
                    <b>|</b>
                    <div className="header-lang-change-container">
                        <a href="#">eng</a>
                    </div>
                </span>
                {user && (
                    <div className="userDiv">
                        <span>{user.email}</span>
                        <button onClick={userLogout}>Log out</button>
                    </div>
                )}
                {!user && (
                    <button id="nav-btn" onClick={showFormCanvas}>
                        Log in
                    </button>
                )}
            </div>
            <div className="form-canvas" ref={formCanvas}>
                <div className="form-wrap">
                    <div className="form-close">
                        <i
                            className="fa-solid fa-xmark fa-2xl"
                            id="form-close"
                            onClick={hideFormCanvas}
                        ></i>
                    </div>

                    <div className="tabs">
                        <h3 className="signup-tab">
                            <a
                                className="active"
                                ref={firstLink}
                                onClick={(e) => signupTab(e)}
                            >
                                Sign Up
                            </a>
                        </h3>
                        <h3 className="login-tab">
                            <a ref={secondLink} onClick={(e) => loginTab(e)}>
                                Login
                            </a>
                        </h3>
                    </div>

                    <div className="tabs-content">
                        <div
                            id="signup-tab-content"
                            className="active"
                            ref={signupTabContent}
                        >
                            <form
                                className="signup-form"
                                onSubmit={handleSubmit1}
                            >
                                <input
                                    type="email"
                                    className="input"
                                    id="user_email"
                                    placeholder="Email"
                                    value={email1}
                                    onChange={(e) => setEmail1(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    id="user_pass"
                                    placeholder="Password"
                                    value={password1}
                                    onChange={(e) =>
                                        setPassword1(e.target.value)
                                    }
                                />
                                <input
                                    type="submit"
                                    className="button"
                                    value="Sign Up"
                                    disabled={isLoading1}
                                />
                            </form>
                            {error1 && <div className="error">{error1}</div>}
                            <div className="help-text">
                                <p>By signing up, you agree to our</p>
                                <p>
                                    <a href="#">Terms of service</a>
                                </p>
                            </div>
                        </div>

                        <div id="login-tab-content" ref={loginTabContent}>
                            <form
                                className="login-form"
                                onSubmit={handleSubmit2}
                            >
                                <input
                                    type="email"
                                    className="input"
                                    id="user_login"
                                    placeholder="Email"
                                    value={email2}
                                    onChange={(e) => setEmail2(e.target.value)}
                                />
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    value={password2}
                                    onChange={(e) =>
                                        setPassword2(e.target.value)
                                    }
                                />
                                <input
                                    type="checkbox"
                                    className="checkbox"
                                    id="remember_me"
                                    ref={checkbox}
                                />
                                <label htmlFor="remember_me">Remember me</label>

                                <input
                                    type="submit"
                                    className="button"
                                    value="Login"
                                    disabled={isLoading2}
                                />
                            </form>
                            {error2 && <div className="error">{error2}</div>}
                            <div className="help-text">
                                <p>
                                    <a href="#">Forgot your password?</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
