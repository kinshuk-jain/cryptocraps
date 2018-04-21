import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ALLOWED_COMMENT_LENGTH } from '../../Feedback.constants';
// import { escapeHTML } from '../../../../core/utils';
import data from '../../data/feedback.data.json';

import { NegativeFeedback } from '../../components';

// TODO: submit form
class NegativeFeedbackContainer extends Component {
  initialState = {
    input: {
      selectValue: 'select',
      commentLength: 0,
      comment: '',
    },
    inputError: {
      invalidInput: false,
      invalidText: false,
    },
    successSubmit: false,
    _issue: {},
  };
  state = this.initialState;

  validateSelect = () => {
    const { input } = this.state;
    if (input.selectValue === 'select') {
      this.setState(state => ({
        ...state,
        inputError: {
          ...state.inputError,
          invalidInput: true,
          invalidText: false,
        },
        successSubmit: false,
      }));
      return false;
    }
    return true;
  };

  validateMinCommentLength = () => {
    const { input } = this.state;
    if (
      input.selectValue === data.issue[data.issue.length - 1] &&
      input.commentLength < 30
    ) {
      this.setState(state => ({
        ...state,
        inputError: {
          ...state.inputError,
          invalidInput: false,
          invalidText: true,
        },
        successSubmit: false,
      }));
      return false;
    }
    return true;
  };

  formValidate = e => {
    e.stopPropagation();
    e.preventDefault();
    // const { input } = this.state;
    // const desc = escapeHTML(input.comment);
    // eslint-disable-next-line
    this.validateSelect() &&
      this.validateMinCommentLength() &&
      this.setState({
        successSubmit: true,
      });
  };

  handleSelectChange = e => {
    const val = e.target.value;
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        selectValue: val,
      },
    }));
  };

  handleCommentChange = e => {
    const val = e.target.value;
    this.setState(state => ({
      ...state,
      input: {
        ...state.input,
        comment: val,
        commentLength: val.length,
      },
    }));
  };

  remainingCommentLength = () =>
    Math.max(ALLOWED_COMMENT_LENGTH - this.state.input.commentLength, 0);

  modalCloseFn = () => {
    this.setState(this.initialState);
    this.props.modalCloseFn();
  };

  render() {
    const { input, inputError, successSubmit } = this.state;
    return (
      <NegativeFeedback
        data={data}
        state={input}
        handleCommentChange={this.handleCommentChange}
        handleSelectChange={this.handleSelectChange}
        remainingCommentLength={this.remainingCommentLength}
        onSubmit={this.formValidate}
        invalidText={inputError.invalidText}
        invalidInput={inputError.invalidInput}
        successSubmit={successSubmit}
        modalCloseFn={this.modalCloseFn}
      />
    );
  }
}

NegativeFeedbackContainer.propTypes = {
  modalCloseFn: PropTypes.func.isRequired,
};

export default NegativeFeedbackContainer;
