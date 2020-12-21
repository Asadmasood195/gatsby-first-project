/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const PostTemplate = path.resolve('./src/templates/blog-post.tsx')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  html
                    id
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(({ errors, data }) => {
        if (errors) {
          console.log(errors)
          reject(errors)
        }
        data.allMarkdownRemark.edges.forEach(({ node }) => {
          createPage({
            path: node.frontmatter.path,
            component: PostTemplate
          })
        })
        // Create blog posts & pages.
        // const items = data.allFile.edges
        // const posts = items.filter(({ node }) => /posts/.test(node.name))
        // posts.forEach(({ node }) => {
        //   if (!node.remark) return
        //   const { path } = node.remark.frontmatter
        //   createPage({
        //     path,
        //     component: PostTemplate,
        //   })
        // })

        // const pages = items.filter(({ node }) => /page/.test(node.name))
        // pages.forEach(({ node }) => {
        //   if (!node.remark) return
        //   const { name } = path.parse(node.path)
        //   const PageTemplate = path.resolve(node.path)
        //   createPage({
        //     path: name,
        //     component: PageTemplate,
        //   })
        // })
      })
    )
  })
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       alias: {
//         components: path.resolve(__dirname, 'src/components'),
//         templates: path.resolve(__dirname, 'src/templates'),
//         scss: path.resolve(__dirname, 'src/scss'),
//       },
//     },
//   })
// }
