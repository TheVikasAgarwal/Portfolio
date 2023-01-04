import React from 'react'
import './SocialMedia.css'

function SocialMedia() {
    return (
        <>
            <ul className="social">
                <li>
                    <a  href="https://twitter.com/ByBooyah">
                    <i className="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a  href="https://medium.com/@contactvix">
                    <i className="fa fa-medium"></i>
                    </a>
                </li>
                <li>
                    <a  href="https://www.instagram.com/agilebooyah/">
                    <i className="fa fa-instagram"></i>
                    </a>
                </li>
                <li>
                    <a  href="https://www.linkedin.com/company/agilebybooyah/">
                    <i className="fa fa-linkedin"></i>
                    </a>
                </li>
            </ul>
        </>
    )
}

export default SocialMedia
