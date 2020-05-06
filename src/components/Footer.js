import React from 'react'
import PropTypes from 'prop-types'

import Icons from './Icons'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <Icons/>
        <p className="copyright">&copy; 2020 Design: <a href="https://rosshudgins.dev">Ross Hudgins</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
