import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Contact = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(frontmatter: {title: {eq: "Contact"}}) {
                html
            }
          }
        `}
        render={data => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>}
      />
    )
  }

export default Contact
