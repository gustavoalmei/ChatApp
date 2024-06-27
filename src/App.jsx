import React, {createContext, useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth"; // Retorna o estado do usuário, se está logado ou não.
import { auth, db } from "./services/firebase";
import Loading from "./components/Loading";
import Login from "./components/Login";
import {Sidebar} from "./components/Sidebar";
import {Chat} from "./components/Chat";
import * as C from './styles/app';

const App = () => {
  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);
  const [visibility, setVisibility] = useState(false);
  
  useEffect(()=>{
    if(user){
      db.collection('users').doc(user.uid).set({ // Busca os usuários na colletion "Users", caso não tenha, ele irá criar. Ela irá setar o e-mail e foto, vai ser usado como referencia o uid para nao duplicar os usuarios.
        email: user.email, //
        photoURL: user.photoURL
      });
    }
  }, [user])

  if(loading) return <Loading/>;

  if(!user) return <Login/>;

  return (
    <C.Container>
      <Sidebar setUserChat={setUserChat} userChat={userChat} visibility={visibility} setVisibility={setVisibility}/>
      <Chat userChat={userChat} visibility={visibility} setVisibility={setVisibility}/>
    </C.Container>
  );
}

export default App;