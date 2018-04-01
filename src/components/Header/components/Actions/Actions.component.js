import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Actions.component.css';

import { ActionHelper } from '../../components';
import { ACTION_DATA } from '../../data/action.data';

class HeaderActions extends React.Component {
  render() {
    return (
      <div
        className={s.actionContainer}
        style={{ left: `${25 - 5 * (ACTION_DATA.length - 1)}%` }}
      >
        {ACTION_DATA.map((action, i) => (
          <ActionHelper
            key={i}
            className={s.inlineBlock}
            data={action.data}
            name={action.name}
          />
        ))}
        <div className={s.askQuestion}>Login</div>
        <div className={s.askQuestion}>Sign Up</div>
      </div>
    );
  }
}

export default withStyles(s)(HeaderActions);
