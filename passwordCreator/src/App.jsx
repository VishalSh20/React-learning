import React,{ useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false);
  const [specialCharAllowed,setSpecialCharAllowed] = useState(false);
  const [password,setPassword] = useState('');
  const passwordRef = useRef(null);

  const generatePassword = useCallback(()=>{
    let characterSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed)
      characterSet += "0123456789";
    if(specialCharAllowed)
      characterSet += "!@#$%^&*_";

    let pass = "";
    for(let i=0; i<length; i++){
      const randomIndex = Math.floor(Math.random()*characterSet.length);
      pass += characterSet[randomIndex];
    }

    setPassword(pass);
  },[length,numberAllowed,specialCharAllowed]);

  useEffect(generatePassword,[length,numberAllowed,specialCharAllowed]);

  const copyPasswordToClipBoard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
  }

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl text-black bg-yellow-400 mx-5 my-5 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            name='password'
            type='text'
            value={password}
            placeholder={password}
            readOnly
            ref={passwordRef}
             className='outline-none w-full py-1 px-3'
          />
         <button
         onClick={copyPasswordToClipBoard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>    

        <div className='flex flex-col rounded-md border-blue-600 bg-slate-100 px-5 py-2'>
          <div className='flex'>
           <input
           type='range'
        min={8}
        max={15}
        value={length}
        onChange={(e)=>setLength(e.target.value)}
        className='cursor-pointer pr-5'
           />
           <label htmlFor="length" className='text-center'>Length: {length}</label>
          </div>
        <div>
        <input
         type="checkbox"
         defaultChecked={numberAllowed}
         onChange={()=>setNumberAllowed((prev)=>!prev)}
         name='numberAllowed'
        />
        <label htmlFor='numberAllowed'>numberAllowed</label>
        </div>
        <div>
        <input
         type="checkbox"
         defaultChecked={specialCharAllowed}
         onChange={()=>setSpecialCharAllowed((prev)=>!prev)}
         name='specialCharAllowed'
        />
        <label htmlFor='specialCharAllowed'>specialCharAllowed</label>
        </div>

        </div>
      </div>


    </>
  )
}

export default App
