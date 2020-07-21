const meta = {
  // Metadata
  siteTitle: 'Rishab Sharma | Data Scientist',
  siteDescription:
    'Rishab Sharma - Data Scientist and Visual computing Researcher',
  siteTitleAlt: 'Rishab Sharma',
  siteShortName: 'Rishab Sharma',
  siteUrl: 'https://rishab-sharma.github.io', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@kraken2309',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'kraken2309',
  googleAnalyticsID: 'UA-119528850-2',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
