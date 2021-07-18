import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Live = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(frontmatter: {title: {eq: "Live"}}) {
                html
            }
          }
        `}
        render={data => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>}
      />
    )
  }

export default Live
