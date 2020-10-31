// @flow
import * as React from 'react';
import { Link } from 'gatsby';
import './LangList.css';

type Props = {
  languages: Object,
  langKey: string,
}

const LangList = ({ languages, langKey }: Props): React.Node => (
  <div className="lang-root">
    {Object.keys(languages).map(lang => (
      <Link
        key={lang}
        to={lang === langKey ? '/' : `/${lang}/`}
        className="lang-link">
        {languages[lang]}
      </Link>
    ))}
  </div>
);

export default LangList;
