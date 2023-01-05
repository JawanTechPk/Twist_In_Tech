import React, { Component } from 'react';
import style from '../../../styles/popup-window.module.css'

class PopupWindow extends Component {

  componentDidMount() {
    this.scLauncher = document.querySelector('sclauncher');
    // this.scLauncher.addEventListener('click', this.interceptLauncherClick);
  }

  componentWillUnmount() {
    // this.scLauncher.removeEventListener('click', this.interceptLauncherClick);
  }

  interceptLauncherClick = (e) => {
    const { isOpen } = this.props;
    const clickedOutside = !this.emojiPopup.contains(e.target) && isOpen;
    clickedOutside && this.props.onClickedOutside(e);
  }

  render() {
    const { isOpen, children } = this.props;
    return (
      <div className={style.scpopupwindow} ref={e => this.emojiPopup = e}>
        <div className={`${style.scpopupwindowcointainer} ${isOpen ? '' : 'closed'}`}>
          <input
            onChange={this.props.onInputChange}
            className={style.scpopupwindowsearch}
            placeholder="Search emoji..."
          />
          {children}
        </div>
      </div>
    );
  }
}

export default PopupWindow;
