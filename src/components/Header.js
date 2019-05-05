import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-music"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>John Krajicek</h1>
                <p>Music with Leavenworth and Borderline Social Club</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={() => {props.onOpenArticle('about')}}>About</button></li>
                <li><button onClick={() => {props.onOpenArticle('music')}}>Music</button></li>
                <li><button onClick={() => {props.onOpenArticle('painting')}}>Painting</button></li>
                <li><button onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
