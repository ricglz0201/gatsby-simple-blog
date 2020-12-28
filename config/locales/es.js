module.exports = {
  tHome: 'Home',
  tRelativePosts: 'Publicaciones relacionadas',
  tFollowTwitterDescription: 'Deberías seguirlo en twitter',
  tTags: 'Tags',
  tIndTitle: 'Todas las publicaciones',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: ({ count, from, to }) => `${count} publicaciones (${from} - ${to})`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} publicaci${totalCount === 1 ? 'ón' : 'ones'} etiquetado "${tag}"`,
  t404Title: 'No encontrado',
  t404Content: 'Llegaste a una página que no existe... lo siento :(',
};
