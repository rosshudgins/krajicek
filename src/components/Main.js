import React from 'react'
import PropTypes from 'prop-types'

import Icons from './Icons'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About John</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Somf somf somf, somf somf somf somf! By the way, check out my <a href="#work">awesome work</a>.</p>
          <p>Art and music and beer enthusiast.</p>
          {close}
        </article>

        <article id="music" className={`${this.props.article === 'music' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Music</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Solo stuff</p>
          <p>Leavenworth</p>
          <p>Borderline Social Club</p>
          {close}
        </article>

        <article id="painting" className={`${this.props.article === 'painting' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Painting</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>John enjoys painting.</p>
          <p>More info about painting - features, etc.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Call me at a number: </p>
          <p>Email me at: </p>
          <Icons/>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main