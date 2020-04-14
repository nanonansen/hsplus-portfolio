import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const Intro = ({ intro }) => {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let textEl = null
    if (entry !== undefined) {
      textEl = entry.target
      console.log(textEl)

      gsap.set(textEl, { opacity: 0, y: 100 })
      const timeline = gsap.timeline()
      timeline
        .to(textEl, { duration: 1.2, ease: "Power3.inOut", opacity: 1 }, 0.5)
        .to(textEl, { duration: 1.2, ease: "Power3.inOut", y: 0 }, 0.5)
        .pause()
      if (inView) {
        timeline.play()
      }
    }
  }, [inView, entry])
  return (
    <section className="intro">
      <div className="intro__inner">
        <p className="title-l" ref={ref} style={{ opacity: 0 }}>
          {intro.content}
        </p>
      </div>
    </section>
  )
}

export default Intro
