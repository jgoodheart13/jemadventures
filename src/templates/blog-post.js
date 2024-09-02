import React from "react"
import { graphql } from "gatsby"

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark

  return (
    <main className="max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <article className="bg-white p-6 rounded-lg">
        <header className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            {post.frontmatter.title}
          </h1>
          <p className="text-sm text-gray-500">{post.frontmatter.date}</p>
        </header>
        <section
          className="prose lg:prose-xl prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </article>
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
