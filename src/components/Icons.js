import React from 'react'
import PropTypes from 'prop-types'

const Icons = (props) => (
        <ul className="icons">
          <li><a href="https://www.facebook.com/John-Krajicek-Borderline-Social-Club-195045807745923/" className="icon fa-facebook" target="_blank" rel="noopener noreferrer"><span className="label">Facebook</span></a></li>
          <li><a href="https://www.instagram.com/jkrajicek/" className="icon fa-instagram" target="_blank" rel="noopener noreferrer"><span className="label">Instagram</span></a></li>
        </ul>
)

Icons.propTypes = {
    timeout: PropTypes.bool
}

export default Icons
