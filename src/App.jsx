import React, {useEffect, useState} from 'react'
import './index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import { ThemeContext } from './Context/ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark')
  },[])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>

      <div className={`p-6 dark ${theme} ${theme == 'dark'? 'bg-gray-800' : 'bg-blue-300'} min-h-[100vh]`}>

       <h1 className='text-green-300'>
        
       </h1>
       <Header/>
       <Home/>

      </div>
     
    </ThemeContext.Provider>
  )
}

export default App;
