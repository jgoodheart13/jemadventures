import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <main>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  )
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default BlogPostTemplate
