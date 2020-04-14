import React, { useEffect, useRef } from "react"
import { graphql } from "gatsby"
import gsap from "gsap"

import ProjectGrid from "../components/project_grid"

const Cases = ({ data }) => {
  const pageTitle = useRef(null)

  useEffect(() => {
    gsap.set(pageTitle.current, { visibility: "visible" })
    const timeline = gsap.timeline()

    timeline.from(pageTitle.current, {
      duration: 1.5,
      ease: "power3.inOut",
      opacity: 0,
      delay: 0.2,
    })
  }, [])

  const projects = data.projects.edges
  return (
    <div className="page">
      <section className="page__header page__header--medium">
        <h1 className="page__title title-xl" ref={pageTitle}>
          All CaseStudies
        </h1>
      </section>
      <ProjectGrid projects={projects} />
    </div>
  )
}

export default Cases

export const query = graphql`
  query casesQuery {
    projects: allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          projectTitle
          slug
          featuredImage {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  }
`
