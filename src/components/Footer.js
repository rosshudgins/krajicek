import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <ul className="icons">
          <li><a href="https://www.facebook.com/John-Krajicek-Borderline-Social-Club-195045807745923/" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
        </ul>
        <p className="copyright">&copy; 2019 Design: <a href="https://rosshudgins.dev">Ross Hudgins</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
