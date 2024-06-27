import React, { useContext, useEffect, useState } from 'react';
import { SidebarChats } from '../SidebarChats';
import { SidebarHeader } from '../SidebarHeader';
import * as C from './style';

export const Sidebar = ({setUserChat, userChat, visibility, setVisibility}) => {
  return (
    <C.Container isVisible={visibility}>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} visibility={visibility} setVisibility={setVisibility}/>
    </C.Container>
  )
}
