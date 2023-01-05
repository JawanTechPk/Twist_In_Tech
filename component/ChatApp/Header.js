import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/header.module.css';



function Header(props) {
  return (
    <div className={styles.scheader}>
      <img className={styles.scheaderimg} src={props.imageUrl} alt="" />
      <div className={styles.scheaderteamname}> {props.teamName} </div>
      <div className={styles.scheaderclosebutton} onClick={props.onClose}>
        <img src={EditIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
