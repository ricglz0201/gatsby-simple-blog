// @flow
import React from 'react';

import { Link } from 'gatsby';

import './TranslationsLink.css';

type Props = {
  langKey: string,
  translationsLink: Array<any>,
}

function TranslationsLink({ langKey, translationsLink }: Props) {
  if (translationsLink == null || translationsLink.length === 0) {
    return null;
  }

  return (
    <div className="translation-root">
      {translationsLink.map(({ name, url }) => (
        <Link key={name} to={url} className="translation-link">
          {name}
        </Link>
      ))}
    </div>
  );
}

export default TranslationsLink;
