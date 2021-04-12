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
    // {
    //   resolve: `gatsby-plugin-favicon`,
    //   options: {
    //     logo: "./src/images/j45.png",
  
    //     // WebApp Manifest Configuration
    //     appName: null, // Inferred with your package.json
    //     appDescription: null,
    //     developerName: null,
    //     developerURL: null,
    //     dir: 'auto',
    //     lang: 'en-US',
    //     background: '#fff',
    //     theme_color: '#fff',
    //     display: 'standalone',
    //     orientation: 'any',
    //     start_url: '/?homescreen=1',
    //     version: '1.0',
  
    //     icons: {
    //       android: true,
    //       appleIcon: true,
    //       appleStartup: true,
    //       coast: true,
    //       favicons: true,
    //       firefox: true,
    //       yandex: true,
    //       windows: true
    //     }
    //   }
    // },
//    {
//      resolve: `gatsby-plugin-google-analytics`,
//      options: {
//        trackingId: "UA-140526802-1",
//        head: true,
//      },
//    }
  ],
}
