import React from "react";
import Rotas from "./routes";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from "./pages/Login/Login";
function App() {

  const token = sessionStorage.getItem('tk')
  console.log(token);


  if (token == null ) {
    return (
      <>
      <Login />
      </>
    )
  } 
  return (
    <>
    <div className='flex h-screen'>
      
      <Navbar />
      <div className='w-full'>
        <Header />
        <Rotas />
      </div>
    </div>
    <ToastContainer />
    </>
  );
}

export default App;