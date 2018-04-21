import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addToPinBar } from '../../../../actions/pinBarActions';
import { FlagOptions } from '../../components';

class FlagOptionContainer extends React.Component {
  static propTypes = {
    addToPinBar: PropTypes.func.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  flagOptionClickHandler = e => {
    e.stopPropagation();
    this.props.addToPinBar({
      link: this.props.link,
      title: this.props.title,
    });
  };

  render() {
    return <FlagOptions onOptionClick={this.flagOptionClickHandler} />;
  }
}

export const FlagOption = connect(null, dispatch => ({
  addToPinBar: payload => dispatch(addToPinBar(payload)),
}))(FlagOptionContainer);
