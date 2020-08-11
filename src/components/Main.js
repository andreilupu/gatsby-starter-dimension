import PropTypes from 'prop-types'
import React from 'react'
import pic01 from '../images/old-me.jpg'
import pic02 from '../images/new-me.jpg'
import pic03 from '../images/new-new-me.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="Old me!" />
          </span>

          <h3>Hello world</h3>

          <p>My name is Andrei Lupu, and I am a web developer, programmer, gamer, researcher, WordCamp speaker and now a blogger.</p>

          <h3>About me?</h3>

          <p>I could be described as a web enthusiast, WordPress fanboy, and a challenge seeker. I could also be confused with a system which passionately turns a good coffee and headset music into code/software.</p>

          <p>This webpage was born because when I’m developing something new, or I get into any issues in my work I always find useful information on the web on other blogs. I think it is the payback time now.</p>

          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="Andrei Lupu at WordCamp Bucharest!" />
          </span>

          <h3>I’m good at keys and keyboards!</h3>
          <p>Generally, I work as a Back-End Developer, but I like to think that I’m also improving myself in areas like Front-End, Code Quality, Customer-Service or Team-Management. Also, when I will find some others skills, I will brag about it around here.</p>

          <p>Also, I’ve discovered that I love to participate in a WordCamp so, at the next European meeting you will find me there.</p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <h3>Hobbies</h3>
          <p>Even if it doesn’t seem, so I like sports and travels, Football(Soccer) is a childhood passion for me, but I also love snowboarding and riding the mountains.</p>

          <p>I won’t hide the part of me that loves eSports, I’m a big fan of League Of Legends, but I also like to play Diablo 3, Counter-Strike, Fifa, Dragon Age, Darksiders, Devilian … damn … I think I play too much.</p>

          <h3>Who likes to talk? … a lot!</h3>

          <p>I consider myself a friendly person, so whenever you have something to ask me there is no reason the hesitate, shoot me an email, a tweet or something.</p>

          <p>I bet that a discussion won’t hurt!</p>

          <p>Cheers!</p>
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
