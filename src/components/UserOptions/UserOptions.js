import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './UserOptions.css';

class UserOptions extends React.Component {
  render() {
    return (
      <ul className={s.userOptions}>
        <li>
          <i className="icon-share" />
          <span className={s.optionText}>Share(1.3k)</span>
        </li>
        <li>
          <i className="icon-bubble" />
          <span className={s.optionText}>Comment(234)</span>
        </li>
      </ul>
    );
  }
}

export default withStyles(s)(UserOptions);
