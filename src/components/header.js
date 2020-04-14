import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"
import _ from "lodash"

import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = ({ siteTitle, location }) => {
  const headerRef = useRef(null)

  useEffect(() => {
    console.log("location:", location)

    let scrollpos = window.scrollY
    const header = headerRef.current
    const header_height = header.offsetHeight

    const add_class_on_scroll = () => header.classList.add("scrolling")
    const remove_class_on_scroll = () => header.classList.remove("scrolling")

    window.onscroll = _.throttle(() => {
      scrollpos = window.scrollY

      if (scrollpos >= header_height) {
        add_class_on_scroll()
      } else {
        remove_class_on_scroll()
      }

      console.log(scrollpos)
    }, 100)
  }, [location])
  return (
    <header className="site-header" ref={headerRef}>
      <div className="site-header__inner">
        <h1 className="site-header__logo title-l">
          <AniLink to="/" cover direction="up" bg="#000000">
            {siteTitle}
          </AniLink>
        </h1>
        <div className="site-header__menuBtn title-l">Menu</div>
        <nav className="site-header__nav">
          <AniLink
            className="title-l nav-item"
            to="/cases"
            activeClassName="active"
            cover
            direction="up"
            bg="#000000"
          >
            Cases
          </AniLink>
          <AniLink
            className="title-l nav-item"
            to="/about"
            activeClassName="active"
            cover
            direction="up"
            bg="#000000"
          >
            About
          </AniLink>
          <AniLink
            className="title-l nav-item"
            to="/contact"
            activeClassName="active"
            cover
            direction="up"
            bg="#000000"
          >
            Mail
          </AniLink>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
