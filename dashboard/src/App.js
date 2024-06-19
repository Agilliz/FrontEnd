import React from "react";
import Rotas from "./routes";
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
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