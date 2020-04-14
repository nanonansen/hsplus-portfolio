import React from "react"
import { useInView } from "react-intersection-observer"
import ProjectGridItem from "./project_grid_item.js"

const ProjectGrid = ({ projects }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="project-grid" ref={ref}>
      {projects.map((project, index) => {
        return (
          <ProjectGridItem
            project={project}
            key={project.node.slug}
            inView={inView}
          />
        )
      })}
    </section>
  )
}

export default ProjectGrid
