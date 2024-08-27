import React from "react"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <main>
      <h1>My Blog</h1>
      <ul>
        {posts.map(({ node }) => (
          <li key={node.id}>
            <h2>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default IndexPage
