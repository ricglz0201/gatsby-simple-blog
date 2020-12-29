// @flow
import * as React from 'react'

type State = {
  theme: null | any
}

type BaseComponentProps = {
  isLightTheme: boolean,
  ...,
}

export default function withThemeFlag(
  BaseComponent: React.StatelessFunctionalComponent<BaseComponentProps>
): any {
  class injectTheme extends React.Component<Object, State> {
    constructor() {
      super();
      this.state = { theme: null };
    }

    componentDidMount() {
      this.setState({ theme: window.__theme });
      window.__subOnThemeChange(BaseComponent.name, () => {
        this.setState({ theme: window.__theme });
      });
    }

    componentWillUnmount() {
      window.__unsubOnThemeChange(BaseComponent.name);
    }

    render() {
      const { theme } = this.state;

      const isLightTheme = theme == null ? null : theme === 'light';

      return <BaseComponent {...this.props} isLightTheme={isLightTheme} />;
    }
  }

  return injectTheme;
}
