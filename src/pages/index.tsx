
import * as React from 'react'
import "../App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { graphql, Link } from 'gatsby'
import Menu from "../components/Menu"
import { HelmetPage } from "../components/Helmet"

const BlogPage: React.FC = ({ data }: any) => {

  const blogs = data
  console.log(blogs)
  return (
    <div>
      <HelmetPage />
      <Menu />
      <div className="container">
        <h1 className="text-center">Lattest Posts</h1>
        {/* <br /> */}
        {blogs && blogs.allMarkdownRemark.edges.map((post: { node: { id: React.Key; frontmatter: { title: React.ReactNode; image: { publicURL: string }; body: React.ReactNode; author: React.ReactNode; date: React.ReactNode; path: string } } }) => (
          <div key={post.node.id} className="container text-center py-4">
            <h3>{post.node.frontmatter.title}</h3>
            <img style={{ display: 'block', margin: '0 auto', width: '80vw', maxHeight: '100vh' }} src={post.node.frontmatter.image.publicURL} />
            <br />
            <p>{post.node.frontmatter.body}</p>
            <br />

            <Link to={post.node.frontmatter.path} ><button className="btn btn-primary">Read More</button> </Link>
          </div>
        ))}
        <br />
        <br />
      </div>
    </div>
  )
}



export const pageQuery = graphql`
query BlogIndexQuery{
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
              id
            frontmatter {
              path
              title
              body
              author
              date
              image {
                publicURL
              }
            }
          }
        }
      }
}
`

export default BlogPage










// import * as React from 'react'
// import Link from 'gatsby-link'

// interface IndexPageProps {
//   data: {
//     site: {
//       siteMetadata: {
//         title: string
//       }
//     }
//   }
// }

// export default class extends React.Component<IndexPageProps, {}> {
//   constructor(props: IndexPageProps, context: any) {
//     super(props, context)
//   }
//   public render() {
//     return (
//       <div>
//         <h1>Hi people</h1>
//         <p>
//           Welcome to your new{' '}
//           {/* <strong>{this.props.data.site.siteMetadata.title}</strong> site. */}
//         </p>
//         <p>Now go build something great.</p>
//         <Link to="/page-2/">Go to page 2</Link>
//       </div>
//     )
//   }
// }

// export const pageQuery = graphql`
// query IndexQuery{
//   allMarkdownRemark {
//       edges {
//         node {
//             id

//           frontmatter {
//             path
//             title
//             author
//             date
//             image {
//               absolutePath
//               relativePath
//               publicURL
//             }
//           }
//         }
//       }
//     }
// }
// `
