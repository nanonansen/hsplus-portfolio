import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import gsap from "gsap"

const Services = () => {
  const [ref, inView, entry] = useInView({
    triggerOnce: true,
    threshold: 0.15,
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
    <section className="services">
      <div className="services__inner">
        <p className="title-l" ref={ref} style={{ opacity: 0 }}>
          Services We help our clients tell their unique stories, connect with
          their audiences and execute their visions by combining artful
          expression with modern utility. Our work bridges the gap between ethos
          and function, personality and features, impression and affect. To do
          this, we provide our clients with a mixture of creative visualization,
          systems thinking and strategic perspective.
        </p>
      </div>
    </section>
  )
}

export default Services
