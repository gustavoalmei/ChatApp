import React from 'react';
import * as C from './style';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../services/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';
import { SidebarChatsItem } from '../SidebarChatsItem';

export const SidebarChats = ({setUserChat, userChat, visibility, setVisibility}) => {
  const [user] = useAuthState(auth);

  const refChat = db
    .collection("chats")
    .where("users", "array-contains", user.email);

  const [chatsSnapshot] = useCollection(refChat);
  
  return (
    <C.Container>
      {chatsSnapshot?.docs.map((item, index) => (
        <C.Content key={index}>
          <SidebarChatsItem
            visibility={visibility} 
            setVisibility={setVisibility}
            id={item.id}
            users={item.data().users}
            user={user}
            setUserChat={setUserChat}
            active={userChat?.chatId === item.id? 'Active' : ''}/>
          <C.Divider/>
        </C.Content>
      ))}
    </C.Container>
  )
}