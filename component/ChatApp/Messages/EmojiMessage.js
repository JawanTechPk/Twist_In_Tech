import React from 'react';
import styles from '../../../styles/message.module.css'

const EmojiMessage = (props) => {
  return <div className={styles.scmessageemoji}>{props.data.emoji}</div>;
};

export default EmojiMessage;
