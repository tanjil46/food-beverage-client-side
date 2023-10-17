import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import auth from "./firebase.config";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const[user,setUser]=useState(null)





    const createUser=(email,Password)=>{
      return createUserWithEmailAndPassword(auth,email,Password)
  
    };
    
    const userSingIn=(email,password)=>{
      return  signInWithEmailAndPassword(auth,email,password)
    };

    const googleLogIn=()=>{
      return signInWithPopup(auth,googleProvider)
    }
    



 const userLogOut=()=>{
    return signOut(auth)
 }










    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
       
          setUser(currentUser)
      
           })
     
          return ()=>{
             unSubscribe()
          }
     
     },[]);







const authValues={user,createUser,userSingIn,googleLogIn,userLogOut}





    return (
    <AuthContext.Provider value={authValues}>
            {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;