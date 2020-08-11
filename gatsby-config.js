module.exports = {
  siteMetadata: {
    title: 'Andrei Lupu - Just another ...',
    author: 'Andrei Lupu',
    description: 'I\'m Andrei Lupu and I could be described as a web enthusiast, WordPress fanboy, and a challenge seeker.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
