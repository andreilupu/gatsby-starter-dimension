import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}> 
       <ul className="icons">
            <li>
              <a
                href="https://profiles.wordpress.org/euthelup/"
                className="icon fa-wordpress"
              >
                <span className="label">WordPress Profile</span>
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/story/andrei-lupu-304800"
                className="icon fa-stack-overflow"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/andreilupu"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/euthelup"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/lupulup" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/the.lup/" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lupuandrei/" className="icon fa-linkedin">
                <span className="label">Linkedin</span>
              </a>
            </li>

          </ul>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
