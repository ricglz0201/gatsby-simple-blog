const pathPrefix = '/gatsby-simple-blog';
const githubUsername = 'ricglz0201';
const site = {
  pathPrefix,
  title: 'Gatsby Starter Blog',
  author: 'Ricardo González',
  description: 'A starter blog demonstrating what Gatsby can do.',
  siteUrl: `https://${githubUsername}.github.io${pathPrefix}`,
  twitter: 'ricglz',
  github: githubUsername,
  disqusShortName: 'gatsby-simple-blog',
  lang: 'en',
  displayTranslations: true,
  postsPerPage: 3,
};

const supportedLanguages = {
  en: 'English',
  'zh-hans': '简体中文',
};

module.exports = {
  site,
  supportedLanguages,
};
