import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addToPinBar } from '../../../../actions/pinBarActions';
import { FlagOptions } from '../../components';
import { FLAG_OPTIONS } from '../../FlagOptions.constants';
import { NegativeFeedbackContainer } from '../../../Feedback';

class FlagOptionContainer extends React.Component {
  static propTypes = {
    addToPinBar: PropTypes.func.isRequired,
    eventId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    showNegativeFeedback: false,
  };

  flagOptionClickHandler = e => {
    const li = e.target && e.target.closest('li');
    if (li) {
      switch (li.id) {
        case FLAG_OPTIONS.FLAG.ID:
          this.setState({ showNegativeFeedback: true });
          return;
        case FLAG_OPTIONS.PIN.ID:
          this.props.addToPinBar({
            eventId: this.props.eventId,
            title: this.props.title,
          });
          return;
        default:
          console.error('Invalid Id'); // eslint-disable-line
      }
    }
  };

  modalCloseFn = () => {
    this.setState({ showNegativeFeedback: false });
  };

  render() {
    const { showNegativeFeedback } = this.state;
    return (
      <div>
        {showNegativeFeedback && (
          <NegativeFeedbackContainer modalCloseFn={this.modalCloseFn} />
        )}
        <FlagOptions onOptionClick={this.flagOptionClickHandler} />
      </div>
    );
  }
}

export const FlagOption = connect(null, dispatch => ({
  addToPinBar: payload => dispatch(addToPinBar(payload)),
}))(FlagOptionContainer);
