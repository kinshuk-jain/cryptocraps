import React from 'react';
import PropTypes from 'prop-types';
import { PositiveFeedback } from '../../components';

// TODO: Submit feedback
class PositiveFeedbackContainer extends React.Component {
  render() {
    const { modalCloseFn } = this.props;
    return <PositiveFeedback modalCloseFn={modalCloseFn} />;
  }
}

PositiveFeedbackContainer.propTypes = {
  modalCloseFn: PropTypes.func.isRequired,
};

export default PositiveFeedbackContainer;
