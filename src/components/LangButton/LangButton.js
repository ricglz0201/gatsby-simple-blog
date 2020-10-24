// @flow
import * as React from 'react';

import IconLanguage from './IconLanguage';
import './LangButton.css';

type Props = {
  lang: string,
  onClick: ?(() => void),
  focused: bool,
}

function LangButton({
  lang = 'English',
  onClick = null,
  focused = false,
}: Props): React.Node {
  const focusedClass = focused ? 'language-focused' : '';
  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      className={`language ${focusedClass}`}
      onClick={onClick}
      role="button"
    >
      <IconLanguage className="icon" />
      <span>{lang}</span>
    </div>
  );
}

export default LangButton;
