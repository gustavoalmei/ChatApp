import React from 'react';
import * as C from './style';
import {MdDonutLarge, MdChat, MdMoreVert} from 'react-icons/md'; // Importação dos ícones
import * as EmailValidator from 'email-validator'; // validador de e-mail
import { auth, db } from '../../services/firebase'; // autenticador e db do firebase
import { useAuthState } from 'react-firebase-hooks/auth'; // status do usuario logado
import { useCollection } from 'react-firebase-hooks/firestore'; // hook do firestore

export const SidebarHeader = ({setUserChat}) => {
  const [user] = useAuthState(auth);
  const refChat = db
    .collection('chats')
    .where('users', 'array-contains', user.email); // Busca na colletion 'chats', users.email
  const [chatsSnapshot] = useCollection(refChat); // armazena os valores da busca em chatsSnapshot

  const handleCreateChat = () =>{
    const emailInput = prompt("Escreva o e-mail desejado.")

    if(!emailInput) return;

    if(!EmailValidator.validate(emailInput)){ // valida e-mail
      return alert('E-mail inválido!');
    }else if(emailInput == user.email){
      return alert('Insira um e-mail diferente!');
    }else if(chatExists(emailInput)){
      return alert('Chat já existe!')
    }

    db.collection('chats').add({
      users: [user.email, emailInput],
    })
  }

  const chatExists = (emailChat) => {
    return !!chatsSnapshot?.docs.find(
      (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
    )
  }

  return (
    <C.Container>
      <C.Avatar
        src={user?.photoURL}
        onClick={()=>[auth.signOut(), setUserChat(null)]}>
      </C.Avatar>
      <C.Options>
        <MdDonutLarge/>
        <MdChat onClick={handleCreateChat}/>
        <MdMoreVert/>
      </C.Options>
    </C.Container>
  )
}
