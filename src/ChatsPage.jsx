import React from "react";
import {
  MultiChatSocket,
  MultiChatWindow
  useMultiChatLogic,
} from 'react-chat-engine';


const ChatsPage = () => {
  const chatProps = useMultiChatLogic(
    'b75e5bd5-cd84-404c-b820-06feff8c98c0',
    props.user.username, props.user.secret
  );
  return <div className="background" style={{height:'100vh'}}>
          <MultiChatWindow {...chatProps} />
      <MultiChatSocket {...chatProps} />
  </div>
};

export default ChatsPage;
