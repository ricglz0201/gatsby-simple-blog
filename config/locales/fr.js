module.exports = {
  tHome: 'Accueil',
  tRelativePosts: 'Publications lié',
  tFollowTwitterDescription: 'Vouz devriez le suivre sur Twitter',
  tTags: 'étiquettes',
  tIndTitle: 'Toutes les publications',
  taIndKeywords: [`blog`, `gatsby`, `javascript`, `react`],
  tfIndCountPosts: ({ count, from, to }) => `${count} publications (${from} - ${to})`,
  tfTagHeader: (totalCount, tag) =>
    `${totalCount} publication${totalCount === 1 ? '' : 's'} étiquetté avec "${tag}"`,
  t404Title: 'Pas trouvé',
  t404Content: "C'est page n'éxiste pas... très désolé :(",
};
