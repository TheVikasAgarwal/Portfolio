import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <>
             <footer className="fadeInUp col-md-12">
        <div className="footer-icons">
            <ul className="navbar-nav ">
                <li className="nav-item inline-block">
                    <a href="https://twitter.com/ByBooyah" aria-label="Github" className="nav-link text-github"><i
                            className="fa fa-twitter"></i></a></li>
                <li className="nav-item inline-block">
                    <a href="https://medium.com/@contactvix" aria-label="Medium" className="nav-link">

                        <span><img className="img-circle medium-icon" width="24" alt=""
                                src="https://seeklogo.com/images/M/medium-logo-93CDCF6451-seeklogo.com.png"/></span></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.instagram.com/agilebooyah/" aria-label="Insagram" className="nav-link"><i className="fa fa-instagram"
                        ></i></a>
                </li>
                <li className="nav-item inline-block"><a href="https://www.linkedin.com/company/agilebybooyah/" aria-label="LinkedIn" className="nav-link"><i className="fa fa-linkedin"
                        ></i></a>
                </li>
            </ul>
        </div>
    </footer>
    <h5  className="text-center copyright"> © Copyrights reserved by Vikas Agarwal</h5>
        </>
    )
}

export default Footer
