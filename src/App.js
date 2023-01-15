import React, { useState } from 'react';
import Home from './Pages/Home'
function App() {
  const [theme,setTheme]=useState(null);
  return (
    <div className="App" id={theme}>
      <Home />
    </div>
  );
}

export default App;
