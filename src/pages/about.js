import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const About = ({ data }) => {
  console.log("aboutpage", data)

  return (
    <div className="page">
      <section className="page__header">
        <Img className="header-image" fluid={data.about.coverImage.fluid} />
        {/* <h1 className="page__title title-xl">{data.about.pageTitle}</h1> */}
      </section>
      <section className="page__content"></section>
    </div>
  )
}

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsAbout {
      pageTitle
      coverImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
