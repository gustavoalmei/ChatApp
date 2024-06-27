import React, { createContext, useContext, useEffect, useState} from 'react';
import * as C from './style';
import {MdPerson, MdMoreVert, MdSearch, MdMenu } from 'react-icons/md';


export const ChatHeader = ({photoURL, name, visibility, setVisibility}) => {
  const handleClose = ()=>{
    setVisibility(!visibility);
  };


  return (
    <C.Container>
      <C.groupUserInfo>
        <MdMenu onClick={handleClose}/>
        <C.UserInfo>
          {photoURL? <C.Avatar src={photoURL} alt='Avatar'/>: <MdPerson/>}
          <C.NameContent>
            <C.Name>{name}</C.Name>
          </C.NameContent>
        </C.UserInfo>
      </C.groupUserInfo>
      <C.Options>
        <MdSearch/>
        <MdMoreVert/>
      </C.Options>
    </C.Container>
  )
}

export const isVisible = createContext({
  
});
