import {React,useState} from 'react'
import {auth} from "../../db/firebase.js";
import { createUserWithEmailAndPassword} from 'firebase/auth'; 

function SignIn() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  console.log(auth?.currentUser?.email);
  const handleSignIn=async()=>{
    try{
    await createUserWithEmailAndPassword(auth,email,password);
    setEmail("");
    setPassword("");
    }catch(err){
      console.log(err);
    }
  };
  const handleSignOut = async () => {
    await auth.signOut();
  };
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  };
  const handlePassword=(e)=>{
    setPassword(e.target.value);
  };

  return (
    <div className='absolute mt-[100px]'>
      <div>
      <div>
      <label for="email">Institute Email Id:</label>
          <input type="text" className="border-2 border-solid" onChange={handleEmail}></input>
      </div>
        <div className=''>
          <label for="password">Password:</label>
          <input type="password" className='border-2 border-solid'
          onChange={handlePassword}></input>
        </div>
        <div>
          <button className='border-2' onClick={handleSignIn}>Sign in</button>
        </div>
        
        <div>
          <button className='border-2'>Sign in With Google</button>
        </div>
        <div>
          <button className='border-2' onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  )
}

export default SignIn

