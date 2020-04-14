import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const NextProject = ({ next }) => {
  const url = `/works/${next.slug}`

  return (
    <div className="next-project">
      <h3 className="next-project__subtitle title-l">Next Project:</h3>
      <AniLink
        className="next-project__title title-xl"
        to={url}
        cover
        direction="up"
        bg="#000000"
      >
        {next.projectTitle}
      </AniLink>
    </div>
  )
}

export default NextProject
