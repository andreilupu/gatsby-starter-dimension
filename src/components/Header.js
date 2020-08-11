import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
    </div>
    <div className="content">
      <div className="inner">
        <h1>Andrei Lupu</h1>
        <p>
          A web developer that could be described as a web enthusiast, WordPress fanboy, and a challenge seeker.
          <br />
          You can find me on social media but mainly on {' '}
          <a href="https://twitch.tv/thelup">twitch.tv/thelup</a>
          <br />
          Cheers!{' '}
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('intro')
            }}
          >
            Intro
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('work')
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
