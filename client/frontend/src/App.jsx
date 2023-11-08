  "use client"
  //Import Section
  import React from 'react'

  import { Route, Routes, Link } from "react-router-dom";
  import {logo,logocolor} from "./assets"
  import {Home,CreatePost} from "./pages/index"



  const App = () => {
    return (
      <>
        <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] '>
          <Link to="/"><img src={logocolor} alt='logo' className='w-20 object-contain'/> </Link>
          <Link to="/CreatePost" className='font-inter font-medium bg-[#6469ff] text-white px-4  py-2 rounded-md '>Create AI-Images</Link>
        </header>
        <main className='smL:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/CreatePost" element={<CreatePost/>} />
          </Routes>

        </main>
      </>)
  }



  //Export Section
  export default App










  // import { useState } from 'react'
  // import reactLogo from './assets/react.svg'
  // import viteLogo from '/vite.svg'
  // import './App.css'

  // function App() {
  //   const [count, setCount] = useState(0)

  //   return (
  //     <>
  //       <div>
  //         <a href="https://vitejs.dev" target="_blank">
  //           <img src={viteLogo} className="logo" alt="Vite logo" />
  //         </a>
  //         <a href="https://react.dev" target="_blank">
  //           <img src={reactLogo} className="logo react" alt="React logo" />
  //         </a>
  //       </div>
  //       <h1>Vite + React</h1>
  //       <div className="card">
  //         <button onClick={() => setCount((count) => count + 1)}>
  //           count is {count}
  //         </button>
  //         <p>
  //           Edit <code>src/App.jsx</code> and save to test HMR
  //         </p>
  //       </div>
  //       <p className="read-the-docs">
  //         Click on the Vite and React logos to learn more
  //       </p>
  //     </>
  //   )
  // }

  // export default App
