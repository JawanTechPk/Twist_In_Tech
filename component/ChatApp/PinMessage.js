import { pipe, prop, propOr, length, ifElse } from 'ramda';
import React from 'react';
import PropTypes from 'prop-types';
// import EditIcon from '../assets/image.png';
// EditIcon
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/pin-message.module.css';



function PinMessage({ pinMessage, onPinMessage }) {
  const image = propOr(EditIcon, 'imageUrl', pinMessage);
  const title = pipe(
    prop('title'),
    ifElse(
      item => length(item) > 34,
      item => `${item.slice(0, 34)}...`,
      item => item,
    )
  )(pinMessage);
  const text = pipe(
    prop('text'),
    ifElse(
      item => length(item) > 50,
      item => `${item.slice(0, 50)}...`,
      item => item,
    )
  )(pinMessage);

  return (
    <div className={styles.scpinmessage} onClick={() => onPinMessage(pinMessage)}>
      <img
        className={styles.scpinmessageimg}
        src={image}
        alt=""
      />
      <div className={styles.scpinmessagedesc}>
        <div className={styles.scpinmessagetitle}>{title}</div>
        <div>{text}</div>
      </div>
    </div>
  );
}

PinMessage.propTypes = {
  pinMessage: PropTypes.object,
  onPinMessage: PropTypes.func,
};

export default PinMessage;
