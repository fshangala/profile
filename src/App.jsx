import { Menubar } from 'primereact/menubar';
import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <Menubar model={[
          {
            label:"Home",
            command:()=>navigate("/")
          },
          {
            label:"Services",
            command:()=>navigate("/services")
          }
        ]} />
      </div>
      <div style={{padding:"0 16px"}}><Outlet/></div>
      <div></div>
    </div>
  )
}

export default App
