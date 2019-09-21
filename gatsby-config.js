const cfg = {
//module.exports = {
  siteMetadata: {
    title: `Roman Kravets`,
    description: `Web Developer, Programmer, HTML & CSS Coder. Roman Kravets is a Ukrainian web frontend developer.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: "/dev-page.git",
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-layout`,
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
        icon: `./src/images/coder-icon.png`,
      },
    },
  ],
};
  if (process.env.CONTEXT === "production") {
    const googleAnalyticsCfg = {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-148411551-1" // <- your tracking ID
      }
    };
    cfg.plugins.push(googleAnalyticsCfg);
  }
module.exports = cfg;