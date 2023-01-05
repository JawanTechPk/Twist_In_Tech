import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ChatWindow from './ChatWindow';
import EditIcon from '@mui/icons-material/Edit';
import styles from '../../styles/launcher.module.css';


class Launcher extends Component {

  constructor() {
    super();
    this.state = {
      EditIcon,
      isOpen: false
    };
  }

	UNSAFE_componentWillReceiveProps(nextProps) {
  	if (this.props.mute) { return; }
    const nextMessage = nextProps.messageList[nextProps.messageList.length - 1];
    const isIncoming = (nextMessage || {}).author === 'them';
    const isNew = nextProps.messageList.length > this.props.messageList.length;
    if (isIncoming && isNew) {
      this.playIncomingMessageSound();
    }
  }

  playIncomingMessageSound() {
    var audio = new Audio(incomingMessageSound);
    audio.play();
  }

  handleClick() {
    if (this.props.handleClick !== undefined) {
      this.props.handleClick();
    } else {
      this.setState({
        isOpen: !this.state.isOpen,
      });
    }
  }

  render() {
  	const isOpen = this.props.hasOwnProperty('isOpen') ? this.props.isOpen : this.state.isOpen;

  	const classList = [
      'sclauncher',
      (isOpen ? 'opened' : ''),
    ];

    return (
      <div id="sclauncher">
	      <div className={classList.join(' ')} onClick={this.handleClick.bind(this)}>
          <MessageCount count={this.props.newMessagesCount} isOpen={isOpen} />
          <img className={styles.scopenicon} src={EditIcon} />
          <img className={styles.scclosedicon} src={EditIcon} />
        </div>

	      <ChatWindow
          messageList={this.props.messageList}
          onUserInputSubmit={this.props.onMessageWasSent}
          onFilesSelected={this.props.onFilesSelected}
          agentProfile={this.props.agentProfile}
          isOpen={isOpen}
          onClose={this.handleClick.bind(this)}
          showEmoji={this.props.showEmoji}
        />
      </div>
    );
  }
}

const MessageCount = (props) => {
  if (props.count === 0 || props.isOpen === true) { return null; }
  return (
    <div className={styles.scnewmessagescount}>
      {props.count}
    </div>
  );
};

Launcher.propTypes = {
  onMessageWasReceived: PropTypes.func,
  onMessageWasSent: PropTypes.func,
  newMessagesCount: PropTypes.number,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  messageList: PropTypes.arrayOf(PropTypes.object),
  mute: PropTypes.bool,
  showEmoji: PropTypes.bool,
};

Launcher.defaultProps = {
  newMessagesCount: 0,
  showEmoji: true
};

export default Launcher;
