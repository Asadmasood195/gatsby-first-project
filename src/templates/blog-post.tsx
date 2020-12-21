import * as React from 'react'
import { Link } from 'gatsby'
import Menu from "../components/menu"


export default function ({ data }: any) {

    const post = data.markdownRemark
    console.log(data.markdownRemark.html.p)
    return (
        <div >
            <Menu />
            <div className="container py-3">
                <Link to="/"><button className="btn btn-primary ">Go Back</button>  </Link>
                <hr />

                <h1 className="pl-5">{post.frontmatter.title}</h1>
                <br />
                <div className="container-fluid">
                    <img style={{ display: 'block', margin: '0 auto', width: '80vw', maxHeight: '100vh' }} src={post.frontmatter.image.publicURL} alt="" />

                </div>
                <br />
                <div className="container">
                    <p>{post.frontmatter.body}</p>
                    <br />
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <small>Posted by {post.frontmatter.author} on {post.frontmatter.date}</small>
                </div>

            </div>

        </div>
    )
}


export const PostQuery = graphql`
query BlogPostsByPath($path:String){
    markdownRemark(frontmatter:{path:{eq:$path}}){
       html
        frontmatter{
            path
            title
            body
            author
            date
            image{
                publicURL
            }
        }
        timeToRead
    }
}
`




// query BlogPostsByPath{
//     markdownRemark(frontmatter: {path: {}}) {
//         html
//         frontmatter {
//           path
//           title
//           author
//           date
//           image {
//             publicURL
//           }
//         }
//       }
// }





















// import * as React from 'react'
// import { graphql, Link } from 'gatsby'


// const BlogPage = ({ data }) => (
//     <div>

//         <div className="container">
//             <h1 className="text-center">Lattest Posts</h1>
//             <br />
//             {data.allMarkdownRemark.edges.map((post: { node: { id: React.Key; frontmatter: { title: any; image: { publicURL: string }; author: any; date: any; path: any } } }) => (
//                 <div key={post.node.id} className="container text-center py-4">
//                     <h3>{post.node.frontmatter.title}</h3>
//                     <img style={{ display: 'block', margin: '0 auto', width: '80vw', maxHeight: '100vh' }} src={post.node.frontmatter.image.publicURL} />


//                     <small>Posted by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
//                     <br />

//                     <Link to={post.node.frontmatter.path} ><button className="btn btn-primary">Read More</button> </Link>
//                 </div>
//             ))}
//             <br />
//             <br />
//         </div>
//     </div>
// )
// export const pageQuery = graphql`
// query BlogIndexQuery{
//     allMarkdownRemark {
//         edges {
//           node {
//               id

//             frontmatter {
//               path
//               title
//               author
//               date
//               image {
//                 absolutePath
//                 relativePath
//                 publicURL
//               }
//             }
//           }
//         }
//       }
// }
// `

// export default BlogPage

