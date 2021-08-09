module.exports = {
  siteMetadata: {
    title: 'Bachmann Portfolio'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-fontawesome-css',
    'gatsby-transformer-yaml',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: './data/'
      },
      __key: 'data'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './data/images/'
      },
      __key: 'images'
    }
  ]
};
