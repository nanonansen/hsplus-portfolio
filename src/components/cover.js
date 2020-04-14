import React from "react"
// import Img from "gatsby-image"
import ArrowDown from "../images/arrow-down.svg"

const Cover = React.forwardRef(({ cover }, ref) => {
  return (
    <section className="cover" ref={ref}>
      <span className="cover-overlay"></span>
      {/* <Img
        className="cover__image-container"
        backgroundColor={true}
        fluid={cover.heroImage.fluid}
      /> */}
      <div className="cover__video-container">
        <video
          // autoPlay="autoplay"
          playsInline
          loop
          width="100%"
          height="100%"
          poster={cover.videoPoster.url}
          preload="auto"
          muted="muted"
        >
          <source src={cover.heroImage.video.mp4Url}></source>
        </video>
      </div>
      <div className="cover__title-container">
        <h1 className="cover__title-content title-xl">{cover.heroTitle}</h1>
      </div>
      <div className="scroll-teaser">
        <img src={ArrowDown} alt="" />
      </div>
    </section>
  )
})

export default Cover
