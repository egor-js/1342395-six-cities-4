import React, {PureComponent} from 'react';

export const withActiveItem = (Component) => {
  return class WithActiveElement extends PureComponent {
    constructor(props) {
      super(props);
      this._elementClickHandler = this._elementClickHandler.bind(this);

      this.state = {
        activeElementId: -1,
      };
    }

    render() {
      return <Component
        {...this.props}
        onActiveItemCheck = {this._elementClickHandler}
        activeItemId = {this.state.activeElementId}
      />;
    }
    _itemClickHandler(id) {
      this.setState({
        activeElementId: id,
      });
    }
  };
};
