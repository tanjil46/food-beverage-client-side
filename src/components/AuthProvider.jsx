import { createContext, useEffect, useState } from "react";
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import auth from "./firebase.config";


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const [loading,setLoading]=useState(true)
    const[user,setUser]=useState(null)





    const createUser=(email,Password)=>{
      setLoading(true)
      return createUserWithEmailAndPassword(auth,email,Password)
  
    };
    
    const userSingIn=(email,password)=>{
      setLoading(true)
      return  signInWithEmailAndPassword(auth,email,password)
    };

    const googleLogIn=()=>{
      setLoading(true)
      return signInWithPopup(auth,googleProvider)
    }
    



 const userLogOut=()=>{
  setLoading(true)
    return signOut(auth)
 }










    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
       
          setUser(currentUser)
          setLoading(false)
           })
     
          return ()=>{
             unSubscribe()
          }
     
     },[]);







const authValues={user,createUser,userSingIn,googleLogIn,userLogOut,loading}





    return (
    <AuthContext.Provider value={authValues}>
            {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;