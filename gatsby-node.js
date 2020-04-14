const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        projects: allDatoCmsWork {
          edges {
            node {
              slug
            }
            next {
              slug
            }
          }
        }
      }
    `).then(result => {
      const projects = result.data.projects.edges

      const createProjectPage = project => {
        // Our GraphQL response actually tells us what the "next" node is, which is great! In the case of the last project in the list, let's default "next" to the very first project so we have a nice "carousel" of projects on our site.
        const next = project.next || projects[0].node

        createPage({
          path: `/works/${project.node.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            nextSlug: next.slug,
            ...project.node,
          },
        })
      }
      projects.forEach(createProjectPage)

      resolve()
    })
  })
}
