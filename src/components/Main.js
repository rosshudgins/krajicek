import React from 'react'
import PropTypes from 'prop-types'

import Icons from './Icons'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import john1 from '../images/john1.jpg'
import john2 from '../images/john2.jpg'
import painting1 from '../images/painting1.jpg'
import johnpromo from '../images/johnpromo.jpg'
import handfulOfRain from '../images/HandfulofRain.jpg'
import pouringRain from '../images/insidethepouringrain.jpg'
import kindOfBlue2 from '../images/KindofBlue2.jpg'
import semaphoric from '../images/semaphoric.jpg'
import slashOfBlue from '../images/SlashofBlue.jpg'
import springRain from '../images/SpringRain.jpg'
import johnshades from '../images/johnshades.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    // TODO: dynamically determine upcoming vs past shows
    // <p><a href="https://www.downtownbryan.com/downtown-street-art-fair">Downtown Bryan Street & Art Fair</a> – Saturday, April 10, 12-12:45</p>
    // <p><a href="https://lonepint.com/">Lone Pint Brewery, Magnolia</a> – Saturday, April 24, 12:30-3:30</p>
    // <p><a href="http://thepostatrivereast.com/">The Post at River East, Fort Worth</a> - song swap with Jacob Furr - Thursday, May 13, 6:00-9:00</p>
    // <p><a href="https://cherrywoodcoffeehouse.com/">Cherrywood Coffeehouse, Austin</a> - song swap with Kevin Peroni - Friday, May 28, 7:30-9:30</p>

    // const shows = [
    //   {
    //     venue: '',
    //     venueLink: '',
    //     date: '',
    //     timeFrame: '',
    //     text: ''
    //   }
    // ]

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About John</h2>
          <span className="image main"><img src={johnshades} alt="" /></span>
          <p>John is a singer songwriter, visual artist, and performer.</p>

          <p>One thing the COVID pandemic has shown us all is how much we
          cherish and miss live music. John loves to play live, loves interacting with
          audiences, and he is thrilled to be booking gigs again.</p>

          <p>We all stand on the shoulders of giants, and like most singer-songwriters,
          John is heavily influenced by a variety of artists, beginning in his youth
          with The Beatles and Bob Dylan. Through the years, his influences have also
           included bands and songwriters such as REM, Tom Petty, Uncle Tupelo, Leonard 
           Cohen, Wilco, Joni Mitchell, Johnny Cash, Will Johnson, and Centro-matic.</p>

          <p>John’s motto is “always be creating,” and he is constantly (maybe
          obsessively) writing new songs. He knows that melody is king in this process, 
          as that’s what can hook the listener. But John is equally fascinated by language, 
          by the way we can process emotions, memories, and experiences into words. A lot 
          of what he writes involves family and
          friends. Actual, real experiences, both profound moments and the more
          mundane moments that somehow become strong memories.</p>
          {close}
        </article>

        <article id="music" className={`${this.props.article === 'music' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h1 className="major">Music</h1>
          <span className="image main"><img src={johnpromo} alt="" /></span>
          <h2>Borderline Social Club</h2>
          {/* <p><a href="https://open.spotify.com/album/0uQLrM8qTw2u6tMtjlOD2J?si=dBXALkBUS9SJVfnahLaIMA">Blue Midwestern Dream - Borderline Social Club</a></p> */}
          <iframe src="https://open.spotify.com/embed/album/0uQLrM8qTw2u6tMtjlOD2J" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/3EMmiy8psMA" title="Buckets of Rain" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/pO6tmks_IXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/D5Q7xF-Za7I" title="Wandering Masquerade Show" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>Solo</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/mhJLXZNXUb0" title="Ones About You" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/k9va01B2n78" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/P6mxW8g42Qs" title="Milwaukee" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/GzozoKx9gJc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
          <iframe width="560" height="315" src="https://www.youtube.com/embed/q1aNP8sYXpE" title="All in Our Hands" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <h2>Leavenworth</h2>
          {/* <p><a href="https://open.spotify.com/artist/3g4Szdp2GxPPBEdYZbrrgx?si=rwIwd2SyRnKCuj9bexYlLw">Leavenworth</a> on Spotify</p> */}
          <iframe src="https://open.spotify.com/embed/artist/3g4Szdp2GxPPBEdYZbrrgx" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/dNymj2SmrW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          <iframe width="560" height="315" src="https://www.youtube.com/embed/iO_TCyQhVxI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

          {close}
        </article>

        <article id="live" className={`${this.props.article === 'live' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Live Shows</h2>
          <span className="image main"><img src={john1} alt="" /></span>
          <p>UPCOMING SHOWS:</p>
          <p><a href="https://lonepint.com/">Lone Pint Brewery, Magnolia (w/ Leavenworth)</a> – Saturday, July 31</p>
          <p><a href="https://grandstaffordtheater.com/">The Grand Stafford, Bryan (w/ Leavenworth)</a> – Saturday, August 21</p>
          <p><a href="https://lonepint.com/">Lone Pint Brewery, Magnolia (w/ Jye Shafer)</a> – Saturday, August 28</p>
          <p><a href="https://lonepint.com/">Lone Pint Brewery, Magnolia (w/ Jye Shafer)</a> – Saturday, September 18</p>
          <p><a href="https://www.cavalrycourt.com/live-music-events.aspx">Cavalry Court, College Station (w/ Leavenworth)</a> – Saturday, September 25</p>
          <p><a href="https://www.cavalrycourt.com/live-music-events.aspx">Cavalry Court, College Station (w/ Leavenworth)</a> – Friday, November 19</p>
          <p>PAST SHOWS:</p>
          <p><a href="https://www.facebook.com/Bensons-Tavern-Beer-Garden-71527323736/">Benson's Tavern &amp; Beer Garden, Salida, CO</a> – Friday, July 6</p>
          <p><a href="https://www.savagebrewlab.com">Savage Brew Lab, Bryan</a> – Friday, June 25</p>
          <p><a href="https://cherrywoodcoffeehouse.com/">Cherrywood Coffeehouse, Austin</a> - song swap with Kevin Peroni - Friday, May 28, 7:30-9:30</p>
          <p><a href="http://thepostatrivereast.com/">The Post at River East, Fort Worth</a> - song swap with Jacob Furr - Thursday, May 13, 6:00-9:00</p>
          <p><a href="https://lonepint.com/">Lone Pint Brewery, Magnolia</a> – Saturday, April 24, 12:30-3:30</p>
          <p><a href="https://www.downtownbryan.com/downtown-street-art-fair">Downtown Bryan Street & Art Fair</a> – Saturday, April 10, 12-12:45</p>
          {close}
        </article>

        <article id="painting" className={`${this.props.article === 'painting' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Visual Artist</h2>
          <p>John is an abstract expressionist painter.</p>
          <p>Read an interview with John about his art <a href="http://oldartguy.com/John_Krajicek_%28Artist%29.html">here.</a></p>
          <span className="image main"><img src={painting1} alt="" /></span>
          <span className="image main"><img src={handfulOfRain} alt="" /></span>
          <span className="image main"><img src={kindOfBlue2} alt="" /></span>
          <span className="image main"><img src={semaphoric} alt="" /></span>
          <span className="image main"><img src={slashOfBlue} alt="" /></span>
          <span className="image main"><img src={springRain} alt="" /></span>
          <span className="image main"><img src={pouringRain} alt="" /></span>
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
