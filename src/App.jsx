import * as React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <div></div>
      <div style={{padding:"0 16px"}}><Outlet/></div>
      <div></div>
    </div>
  )
}

export default App
