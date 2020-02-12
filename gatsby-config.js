module.exports = {
  siteMetadata: {
    title: `Future Heist`,
    description: `Conversations with people making change, a podcast by Rena Niamh Smith. We talk to the activists, campaigners and disruptors making tomorrow's change happen today`,
    author: `Rena Niamh Smith`,
    twitter: `https://twitter.com/future_heist?lang=en`,
    instagram: `https://www.instagram.com/future_heist/?hl=en`,
    facebook: ``,
    youtube: ``,
    apple: `https://podcasts.apple.com/podcast/id1442535889?ct=podlink&mt=2`,
    stitcher: ``,
    google: `https://podcasts.google.com/?feed=aHR0cHM6Ly9mdXR1cmVoZWlzdC5wb2RiZWFuLmNvbS9mZWVkLnhtbA==`,
    pocket: `https://pca.st/itunes/1442535889`,
    spotify: `https://open.spotify.com/show/4joDUPyNZ7TqgmsI68O544`,
    overcast: `https://overcast.fm/itunes1442535889`,
    castbox: `https://soundcloud.com/futureheist`,
    castro: `https://castro.fm/itunes/1442535889`,
    podbean: `https://futureheist.podbean.com/`,
    beaker: `https://futureheist.podbean.com/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `https://pbcdn1.podbean.com/imglogo/image-logo/2144795/26850174_531238480575311_1377019303222901017_o_1_.png`, // This path is relative to the root of the site.
        icon: `src/images/logo.png` // This path is relative to the root of the site.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        // url: `https://www.gatsbyjs.org/blog/rss.xml`,
        // url: `https://boysinthecave.com/feed/podcast/`,
        // url: `http://boysinthecave.libsyn.com/rss`,
        url: `https://feed.podbean.com/futureheist/feed.xml`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            channel: ["title", "image"]
            // item: ["itunes:summary"],
            // item: ["itunes:image", "img"],
          }
        }
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require(`tailwindcss`)]
      }
    }
  ]
};
