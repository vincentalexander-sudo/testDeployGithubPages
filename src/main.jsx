import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import InputTeks from './input_tek.jsx'
import Tambah from './tambah.jsx'
import TambahKurang from './tambah_kurang.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      {/* <InputTeks/>
      <Tambah/> */}
      <TambahKurang/>
      <InputTeks/>
    </div>
  </React.StrictMode>,
)
