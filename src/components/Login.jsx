import { useState } from "react"
import Header from "./Header"
const Login = () => {
  const [isSignIn , setIsSignIn] = useState(true)

 const togleSignInform =() => {
setIsSignIn (!isSignIn);
 }
  return (
    <div >
       <Header/>
       <div className="absolute">
      <img  src = "https://assets.nflxext.com/ffe/siteui/vlv3/9ba9f0e2-b246-47f4-bd1f-3e84c23a5db8/web/IN-en-20251020-TRIFECTA-perspective_d6da84e9-6145-4b1e-bb51-e402c966a045_large.jpg"/>
         </div>
         
         <form className=" w-3/9 absolute bg-black my-39 mx-auto right-0 left-0 text-white p-12">
          <h5 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h5>
          {!isSignIn && (<input type="text"
              placeholder="Full Name"
             className="my-2 h-8 p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:border-red-500"
                 /> )}
          <br/>
          <input type="text" placeholder="Email or phone number" className="my-2 h-8 p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:border-red-500"/>
          <br/>
         
          <input type="password" placeholder="Password" className="my-2 h-8 p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:border-red-500"/>
          <br/>
         


          <button className="bg-red-600 mx-1 p-1 m-2">{isSignIn ? "sign In" : "sign Up"}</button>
         <p className="p-4" onClick={togleSignInform}>{isSignIn ? "New to Netflix Sign Up Now" : "Alredy registered ? Sign Up Now"}</p>
         </form>
        
    </div>
  )
}

export default Login