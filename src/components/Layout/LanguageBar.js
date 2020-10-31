// @flow
import * as React from 'react';
import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { fromPairs } from 'ramda';

import { rhythm } from 'utils/typography';

import LangButton from '../LangButton';
import BalloonField from '../BalloonField';
import LangList from '../LangList/LangList';
import './LanguageBar.css';

type Props = {
  lang?: string,
};

const supportedLanguagesQuery = graphql`
  query SupportedLanguagesQuery {
    site {
      siteMetadata {
        lang
        langsEntries
      }
    }
  }
`;

function LanguageBar({ lang: langKey }: Props): React.Node {
  const data = useStaticQuery(supportedLanguagesQuery)
  const { langsEntries, lang: defaultLang } = data.site.siteMetadata;
  const [displayLang, toggleDisplayLang] = useState(false);
  const handleToggleLanguage = React.useCallback(() => {
    toggleDisplayLang(!displayLang);
  }, [displayLang]);

  const toggleStyle = displayLang ? {
    maxHeight: 200,
    overflow: 'initial',
  } : {
    maxHeight: null,
  };

  if (langsEntries.length < 2) {
    return null;
  }

  const supportedLanguages = fromPairs(langsEntries);
  const language = supportedLanguages[langKey];

  if (!language) {
    return null;
  }

  return (
    <div
      style={{
        maxWidth: rhythm(24),
        margin: 'auto',
      }}
    >
      <div className="bar">
        <LangButton lang={language} focused={displayLang} onClick={handleToggleLanguage} />
      </div>
      <div className="toggle-content" style={toggleStyle}>
        <BalloonField style={{ padding: 20 }}>
          <LangList languages={supportedLanguages} langKey={defaultLang} />
        </BalloonField>
      </div>
    </div>
  );
}

LanguageBar.defaultProps = {
  lang: 'en',
};

export default LanguageBar;
