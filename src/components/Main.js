import React from 'react'
import PropTypes from 'prop-types'

import Icons from './Icons'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import john1 from '../images/john1.jpg'
import john2 from '../images/john2.jpg'
import painting1 from '../images/painting1.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About John</h2>
          <span className="image main"><img src={john2} alt="" /></span>
          <p>John Krajicek is a singer songwriter, artist, and performer.</p>
          <p></p>
          {close}
        </article>

        <article id="music" className={`${this.props.article === 'music' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Music</h2>
          <span className="image main"><img src={john1} alt="" /></span>
          <p>Borderline Social Club</p>
          <p>Leavenworth</p>
          <p>Solo</p>
          {close}
        </article>

        <article id="painting" className={`${this.props.article === 'painting' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Visual Artist</h2>
          <span className="image main"><img src={painting1} alt="" /></span>
          <p>John is an abstract expressionist painter. Current gallery show at The Kyle House in Bryan, TX</p>
          <p>Read an interview with John about his art <a href="http://oldartguy.com/John_Krajicek_%28Artist%29.html">here.</a></p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <p>Call me: 979-777-4268</p>
          <p>Email me at: <a href="mailto:jkrajicek1@gmail.com">jkrajicek1@gmail.com</a></p>
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