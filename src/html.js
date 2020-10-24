// @flow
import React from 'react';

import { themeOper } from './utils/IIFE';

type HTMLProps = {
  body: string,
  bodyAttributes: ?Object,
  headComponents: ?Array<any>,
  htmlAttributes: ?Object,
  postBodyComponents: ?Array<any>,
  preBodyComponents: ?Array<any>,
}

function HTML({
  htmlAttributes = null,
  headComponents = null,
  bodyAttributes = null,
  preBodyComponents = null,
  body = '',
  postBodyComponents = null,
}: HTMLProps): any {
  return (
    <html lang="en" {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {headComponents}
      </head>
      <body {...bodyAttributes} className="light">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (${themeOper.toString()})();
            `,
          }}
        />
        {preBodyComponents}
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
}

export default HTML;
