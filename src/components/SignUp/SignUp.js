import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SignUp.css';

import { showAdditionalQuestion } from '../../actions/additionalQuestion';

import Modal from '../Modal';

class AddQuestion extends Component {
  static propTypes = {
    showAddQuestion: PropTypes.bool,
    showAdditionalQuestion: PropTypes.func,
  };

  static defaultProps = {
    showAddQuestion: false,
    showAdditionalQuestion: () => {},
  };

  state = {
    invalidTag: false,
    invalidTitle: false,
    invalidDesc: false,
    successSubmit: false,
  };

  closeModalFunction() {
    this.props.showAdditionalQuestion(false);
    this.setState({
      successSubmit: false,
    });
  }

  formValidate() {
    let invalidDesc = false;
    let invalidTag = false;
    let invalidTitle = false;
    // check validity of inputs
    if (_.get(this.quesTitle, 'value.length', 0) < 10) {
      invalidTitle = true;
    }
    if (_.get(this.quesTag, 'value.length', 0) < 10) {
      invalidTag = true;
    }
    if (_.get(this.desc, 'value.length', 0) < 20) {
      invalidDesc = true;
    }
    if (invalidDesc || invalidTag || invalidTitle) {
      this.setState({
        invalidDesc,
        invalidTag,
        invalidTitle,
        successSubmit: false,
      });
    } else {
      // TODO: submit question
      this.setState({
        invalidDesc: false,
        invalidTag: false,
        invalidTitle: false,
        successSubmit: true,
      });
    }
  }

  render() {
    const { invalidDesc, invalidTag, invalidTitle, successSubmit } = this.state;
    return this.props.showAddQuestion ? (
      <Modal
        showCross
        closeFn={() => this.closeModalFunction()}
        height={60}
        width={50}
      >
        {successSubmit ? (
          <div>
            <i className="icon-ok_sign" />Your question has been successfully
            submitted!
          </div>
        ) : (
          <form>
            <div className={s.heading}>Title</div>
            <input
              type="text"
              ref={el => {
                this.quesTitle = el;
              }}
              placeholder="Question title (min 20 characters)"
              className={s.quesTitle}
            />
            {invalidTitle && (
              <div className={s.error}>
                Please enter a title in minimum 10 words
              </div>
            )}
            <div className={s.heading}>Tags</div>
            <input
              type="text"
              ref={el => {
                this.quesTag = el;
              }}
              placeholder="add comma separated list of tags such as (bitcoin, ico)"
              className={s.quesCategory}
            />
            {invalidTag && (
              <div className={s.error}>Please enter at least one tag</div>
            )}
            <div className={s.heading}>Description</div>
            <textarea
              ref={el => {
                this.desc = el;
              }}
              placeholder="Question description"
              className={s.quesDesc}
            />
            {invalidDesc && (
              <div className={s.error}>
                Please enter the description in minimum 20 words
              </div>
            )}
            <button
              className={s.submit}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                this.formValidate();
              }}
            >
              Submit
            </button>
          </form>
        )}
      </Modal>
    ) : null;
  }
}

export default withStyles(s)(
  connect(
    ({ showAddQuestion }) => ({
      showAddQuestion,
    }),
    dispatch => ({
      showAdditionalQuestion: payload =>
        dispatch(showAdditionalQuestion(payload)),
    }),
  )(AddQuestion),
);
