import React from 'react';
import PropTypes from 'prop-types';

const withHover = Component => {
  class A extends React.Component {
    static propTypes = {
      className: PropTypes.string,
    };

    static defaultProps = {
      className: '',
    };

    state = {
      showHover: false,
    };

    onMouseOverHandler = () => {
      clearTimeout(this.timeout);
      this.setState({ showHover: true });
    };

    onMouseOutHandler = () => {
      this.timeout = setTimeout(() => {
        this.setState({ showHover: false });
      }, 200);
    };

    render() {
      const { className = '' } = this.props;
      const { showHover } = this.state;
      return (
        <div
          className={className}
          onMouseOver={this.onMouseOverHandler}
          onMouseOut={this.onMouseOutHandler}
        >
          <Component {...this.props} showHover={showHover} />
        </div>
      );
    }
  }

  A.displayName = `withHover(${Component.displayName || Component.name})`;
  return A;
};

export default withHover;
