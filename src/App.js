import React, { useState } from 'react';
import Home from './Pages/Home'
function App() {
  const [theme,setTheme]=useState('light');
  const toggleTheme=()=>{
    if (theme==='light')
    {
        setTheme('dark');
    }
    else
    {
        setTheme('light')
    }
}
  return (
    
    <div className={theme+" App"} >
      <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'></link>
      <Home toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
