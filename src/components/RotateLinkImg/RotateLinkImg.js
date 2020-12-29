// @flow
import React from 'react';

import './RotateLinkImg.css';

type Props = {
  href?: string,
  size?: number,
  src: string,
}

function RotateLinkImg({ href, size, src}: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="rotate-icon">
      <img src={src} alt="RotateLinkImg-icon" width={size} height={size} role="presentation" />
    </a>
  );
}

RotateLinkImg.defaultProps = {
  href: null,
  size: 24,
};

export default RotateLinkImg;
