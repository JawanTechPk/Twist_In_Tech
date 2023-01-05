// import { Fab } from "@mui/material";
import { Component } from "react";
// import EditIcon from '@mui/icons-material/Edit';
import BasicModal from "./Modal";


class ChatApp extends Component {
  // componentDidMount(){
  //   (function(d, m){
  //     var kommunicateSettings = 
  //         {"appId":"kommunicate-support","popupWidget":true,"automaticChatOpenOnNavigation":true};
  //     var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  //     s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  //     var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  //     window.kommunicate = m; m._globals = kommunicateSettings;
  // })(document, window.kommunicate || {});
  // }
  render() {
    return <BasicModal/>;
  }
}

export default ChatApp