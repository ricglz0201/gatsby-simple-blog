// @flow
import * as React from 'react';

import './BalloonField.css';

type Props = {
  children: React.Node,
  className: string,
}

const BalloonField = ({children, className = ''}: Props): React.Node => (
  <div className={`balloon ${className}`}>
    {children}
  </div>
);

export default BalloonField;
