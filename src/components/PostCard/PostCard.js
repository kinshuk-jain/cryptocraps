import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PostCard.css';
import history from '../../history';

import UserOptions from '../UserOptions';
import { FlagOption } from '../FlagOptions';

class PostCard extends React.Component {
  render() {
    const postId = `${Math.random()}1231231`;
    return (
      <div className={s.container}>
        <div className={s.questionContainer}>
          <div
            className={s.question}
            onClick={() => {
              history.push(`/question/${postId}`);
            }}
          >
            What is Bitcoin?
          </div>
          <div className={s.flagpin}>
            <FlagOption eventId={postId} title="what is bitcoin?" />
          </div>
        </div>
        <div className={s.answerContainer}>
          <div className={s.voteContainer}>
            <div>0 Answers</div>
          </div>
          <div className={s.answer}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <UserOptions />
      </div>
    );
  }
}

export default withStyles(s)(PostCard);
