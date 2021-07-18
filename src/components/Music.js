import React from "react"
import { graphql, StaticQuery } from "gatsby"

const Music = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(frontmatter: {title: {eq: "Music"}}) {
                html
            }
          }
        `}
        render={data => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>}
      />
    )
  }

export default Music
