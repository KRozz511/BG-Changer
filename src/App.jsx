import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      </div>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap shadow-lg bg-black justify-center gap-3 px-3 py-2 rounded-3xl'>
          <button onClick = {() => setColor("red")} className='outline-none px-4 rounded-3xl' style={{backgroundColor: "red"}}>Red</button>
          <button onClick = {() => setColor("blue")} className='outline-none px-4 rounded-3xl' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick = {() => setColor("green")} className='outline-none px-4 rounded-3xl' style={{backgroundColor: "green"}}>Green</button>
        </div>
      </div>
    </>
  )
}

export default App
