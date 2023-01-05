import React from 'react';
// import FileIcon from './../icons/FileIcon';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../../styles/message.module.css'




const FileMessage = (props) => {
  return (
    <a className={styles.scmessagefile} href={props.data.url} download={props.data.fileName}>
      <EditIcon />
      <p>{props.data.fileName}</p>
    </a>
  );
};

export default FileMessage;
