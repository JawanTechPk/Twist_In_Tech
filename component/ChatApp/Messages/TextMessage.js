import React from 'react';
import Linkify from 'react-linkify';
import styles from '../../../styles/message.module.css'



const TextMessage = (props) => {
  return <div className={styles.scmessagetext}>{
    <Linkify properties={{ target: '_blank' }}>{props.data.text}</Linkify>
  }</div>;
};

export default TextMessage;
