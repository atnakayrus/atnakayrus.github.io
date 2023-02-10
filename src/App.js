import React, { useState } from 'react';
import Home from './Pages/Home'
function App() {
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=>{
    if (theme==='light')
    {
      console.log('>?')
        setTheme('dark');
    }
    else
    {
        setTheme('light')
    }
}
  return (
    <div className={theme+" App"} >
      <Home toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
