import React, { useRef, useEffect } from "react"

import Img from "gatsby-image"
import gsap from "gsap"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectGridItem = ({ project, inView }) => {
  const imgRef = useRef(null)
  const url = `/works/${project.node.slug}`

  useEffect(() => {
    const imageContainer = imgRef.current
    const imageEl = imgRef.current.querySelector(".item-image")
    const imageTitle = imgRef.current.querySelector(".item-title")
    const itemOverlay = imgRef.current.querySelector(".item-overlay")

    //SET Image Opacity to 0
    gsap.set(imageContainer, { opacity: 0 })
    gsap.set(itemOverlay, { x: "0%" })
    gsap.set(imageEl, { scale: 1.6 })
    gsap.set(imageTitle, { opacity: 0, y: "100%" })

    //CREATE Timeline
    const timeline = gsap.timeline()
    timeline
      .set(imageContainer, { opacity: 1 }, 0.1)
      .to(itemOverlay, { duration: 1.6, ease: "power3.inOut", x: "100%" }, 0.1)
      .to(imageEl, { duration: 1.6, ease: "power3.inOut", scale: 1 }, 0.1)
      .to(
        imageTitle,
        { duration: 1.2, ease: "power3.inOut", opacity: 1, y: "0" },
        0.1
      )
      .pause()

    if (inView) {
      timeline.play()
    }
  }, [inView])

  return (
    <div ref={imgRef} className="project-grid__item">
      <span className="item-overlay"></span>
      <AniLink
        key={project.node.slug}
        to={url}
        cover
        direction="up"
        bg="#000000"
        duration={1}
      >
        <h2 className="item-title title-l">{project.node.projectTitle}</h2>
        <Img
          className="item-image"
          backgroundColor={true}
          fluid={project.node.featuredImage.fluid}
        />
      </AniLink>
    </div>
  )
}

export default ProjectGridItem
