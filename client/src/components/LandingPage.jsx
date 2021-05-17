import { React, useState } from 'react'
import Login from './Login'
import Register from './Register'

export default function LandingPage() {

  const [isLogin, setIsLogin] = useState(true)

  function onClick(e){
    e.preventDefault()
    setIsLogin(!isLogin)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  w-screen h-screen text-white">

      <div className="hidden md:block md:col-span-2 landingBackground">
        <h1 className="p-8 text-9xl text-warmgray-800 font-bold titles">My Budgets</h1>
      </div>

      <div className="grid grid-col-1 justify-items-center content-center bg-gradient-to-br from-warmgray-600 to-warmgray-800 h-screen">
        {isLogin ? (<Login />) : (<Register />)}

        <p className="text-center text-white text-xl mt-4">or <button onClick={onClick} className="underline hover:text-coolgray-400 focus:outline-none">{isLogin ? ("register") : ("login")}</button></p>

        <div className="mt-14 px-10">
          <h6 className="text-xl text-center">"Beware of little expenses. A small leak will sink a great ship"</h6>
          <p className="italic mt-1 px-10 text-end">-Benjamin Franklin.</p>  
        </div>
      </div>

    </div>
  )
}


