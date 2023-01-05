import { prop, equals } from 'ramda';
import React from 'react';
import classNames from 'classnames';
import TextMessage from './TextMessage';
import EmojiMessage from './EmojiMessage';
import FileMessage from './FileMessage';
// import EditIcon from './../../assets/chat-icon.svg';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../../styles/message.module.css'



function Message({ message }) {
  const type = prop('type', message);
  const author = prop('author', message);
  const me = equals(author, 'me');

  function renderMessageOfType(type) {
    switch(type) {
    case 'text':
      return <TextMessage {...message} />;
    case 'emoji':
      return <EmojiMessage {...message} />;
    case 'file':
      return <FileMessage {...message} />;
    default:
      console.error(`Attempting to load message with unsupported file type '${type}'`);
    }
  }

  return (
    <div className={styles.scmessage}>
      <div className={classNames(`${styles.scmessagecontent}`,{ 'sent': me }, { 'received': !me })}>
        <div
          className={styles.scmessageavatar}
          style={{
            backgroundImage: `url(${EditIcon})`
          }}
        />

        {renderMessageOfType(type)}
      </div>
    </div>
  )
}

export default Message;
