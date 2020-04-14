import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const About = ({ data }) => {
  console.log("contactage", data)

  return (
    <div className="page">
      <section className="page__header">
        <Img className="header-image" fluid={data.contact.coverImage.fluid} />
        {/* <h1 className="page__title title-xl">{data.contact.pageTitle}</h1> */}
      </section>
      <section className="page__content"></section>
    </div>
  )
}

export default About

export const query = graphql`
  query ContactQuery {
    contact: datoCmsContact {
      pageTitle
      coverImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
