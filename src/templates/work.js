import React, { useEffect, useRef } from "react"
import gsap from "gsap"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import NextProject from "../components/NextProject"

const Work = ({ data }) => {
  const { project, next } = data
  const content = project.content

  console.log("project", content)

  const headerRef = useRef(null)

  useEffect(() => {
    const headerImg = headerRef.current.querySelector(".header-image")
    const overlay = headerRef.current.querySelector(".cover-overlay")
    const timeline = gsap.timeline()

    gsap.set(headerImg, { scale: 1.5 })
    gsap.set(overlay, { height: "0%" })

    timeline
      //.to(overlay, { duration: 1.2, ease: "power3.inOut", height: 0 }, 0.5)
      .to(headerImg, {
        duration: 1.6,
        ease: "power3.out",
        scale: 1,
      })
  }, [])

  return (
    <>
      <div className="project">
        <section className="project__header" ref={headerRef}>
          <span className="cover-overlay"></span>
          <Img
            className="header-image"
            backgroundColor={true}
            fluid={project.coverImage.fluid}
          />
          <div className="project-title">
            <h1 className="title-xl">{project.projectTitle}</h1>
            <h2 className="title-xl">{project.client}</h2>
          </div>
        </section>
        <section className="project__content">
          {content.map(block => {
            return (
              <div key={block.id} className="content-row">
                {block.model.apiKey === "text_block" && (
                  <p className="block block--text title-l">{block.text}</p>
                )}
                {block.model.apiKey === "image_block" && (
                  <div
                    className={`block block--image align-${block.alignment}`}
                  >
                    <Img fluid={block.image.fluid} />
                  </div>
                )}
              </div>
            )
          })}
        </section>
        <NextProject next={next} />
      </div>
    </>
  )
}

export default Work

export const query = graphql`
  query WorkQuery($slug: String!, $nextSlug: String!) {
    project: datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        tags
      }
      projectTitle
      client
      coverImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
      content {
        ... on DatoCmsTextBlock {
          model {
            apiKey
          }
          id
          text
        }
        ... on DatoCmsImageBlock {
          model {
            apiKey
          }
          id
          alignment
          image {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
    next: datoCmsWork(slug: { eq: $nextSlug }) {
      seoMetaTags {
        tags
      }
      projectTitle
      slug
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
