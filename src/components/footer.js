import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <span className="title-l">
        © {new Date().getFullYear()}, Built with
        {` `}
      </span>
      <a className="title-l" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </footer>
  )
}

export default Footer
