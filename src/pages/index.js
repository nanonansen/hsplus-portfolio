import React, { useEffect } from "react"
import { graphql } from "gatsby"
import gsap from "gsap"
import SplitText from "../utils/SplitText"

import SEO from "../components/seo"

import Cover from "../components/cover"
import Intro from "../components/intro"
import ProjectGrid from "../components/project_grid"
import Services from "../components/services"

const IndexPage = ({ data }) => {
  const projects = data.projects.edges
  const cover = data.cover
  const intro = data.introText.introTextNode.internal

  const coverRef = React.createRef()

  useEffect(() => {
    console.log(coverRef)

    const coverVideo = coverRef.current.querySelector(
      ".cover__video-container video"
    )
    const scrollArrow = coverRef.current.querySelector(".scroll-teaser")
    const coverTitle = coverRef.current.querySelector(".cover__title-content")
    const coverOverlay = coverRef.current.querySelector(".cover-overlay")
    gsap.set(coverOverlay, { height: "100%" })
    gsap.set(scrollArrow, { opacity: "0" })
    const timeline = gsap.timeline()

    let split = new SplitText(coverTitle, {
      type: "words, lines",
      linesClass: "split-line",
    })

    timeline
      .to(coverOverlay, { duration: 1.2, ease: "power3.inOut", height: 0 }, 0.5)
      .from(
        coverVideo,
        {
          duration: 1.4,
          ease: "power3.inOut",
          scale: "1.5",
        },
        0.5
      )
      .from(
        split.words,
        {
          duration: 1.5,
          ease: "power3.inOut",
          y: "200%",
          stagger: 0.05,
        },
        0.8
      )
      .call(
        () => {
          coverVideo.play()
        },
        null,
        ">-0.25"
      )
      .to(scrollArrow, { duration: 3, ease: "power3.inOut", opacity: "100%" })
  }, [coverRef])

  return (
    <>
      <SEO title="Home" />
      <Cover cover={cover} ref={coverRef} />
      <Intro intro={intro} />
      <ProjectGrid projects={projects} />
      <Services />
    </>
  )
}

export default IndexPage

export const query = graphql`
  query AllWorkQuery {
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

    cover: datoCmsHomepage {
      heroTitle
      heroImage {
        video {
          mp4Url(res: medium)
        }
      }
      videoPoster {
        url
      }
    }
    introText: datoCmsHomepage {
      introTextNode {
        internal {
          content
        }
      }
    }
  }
`
