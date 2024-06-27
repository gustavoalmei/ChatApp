import React from 'react';
import * as C from './style';
import { ChatHeader } from '../ChatHeader';
import { ChatBody } from '../ChatBody';
import { ChatFooter } from '../ChatFooter';
import { Default } from '../Default';

export const Chat = ({userChat, visibility, setVisibility}) => {
  if(!userChat){
    setVisibility(true)
  }
  if(!userChat) return <Default/>
  return (
    <C.Container>
      <ChatHeader photoURL={userChat?.photoURL} name={userChat?.name} visibility={visibility} setVisibility={setVisibility}/>
      <ChatBody chatId={userChat?.chatId} />
      <ChatFooter chatId={userChat?.chatId} />
    </C.Container>
  )
}
