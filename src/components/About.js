import React from "react"
import { graphql, StaticQuery } from "gatsby"

const About = (props) => {
    return (
      <StaticQuery
        query={graphql`
          query {
            markdownRemark(frontmatter: {title: {eq: "About"}}) {
                html
            }
          }
        `}
        render={data => <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}/>}
      />
    )
  }

export default About
