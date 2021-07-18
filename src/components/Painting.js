import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Painting = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(frontmatter: {title: {eq: "Painting"}}) {
                html
            }
          }
        `}
        render={data => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>}
      />
    )
  }

export default Painting
