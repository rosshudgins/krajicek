module.exports = {
  siteMetadata: {
    title: "John Krajicek",
    author: "Ross Hudgins",
    description: "A personal site for John Krajicek's art projects."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'JohnKrajicek',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/j45.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["UA-140526802-1"],
      },
    }
  ],
}
