import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import { showAdditionalQuestion } from '../../actions/additionalQuestion';

import Link from '../Link';
import SearchBar from '../SearchBar';
import MenuBar from '../MenuBar';

class Header extends Component {
  static propTypes = {
    showAdditionalQuestion: Proptypes.func.isRequired,
  };
  render() {
    return (
      <div className={s.header}>
        <MenuBar />
        <Link className={s.logoInfo} target="_self" to="/">
          CryptoCraps
        </Link>
        <SearchBar />
        <div className={s.askQuestion}>Login</div>
        <div
          className={s.askQuestion}
          onClick={() => this.props.showAdditionalQuestion(true)}
        >
          Sign Up
        </div>
      </div>
    );
  }
}

export default withStyles(s)(
  connect(null, dispatch => ({
    showAdditionalQuestion: payload =>
      dispatch(showAdditionalQuestion(payload)),
  }))(Header),
);
