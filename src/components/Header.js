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
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('music')}}>Music</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('live')}}>Live Shows</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('painting')}}>Visual Artist</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
