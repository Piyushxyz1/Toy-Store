import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './pages/addproduct/AddProduct'
import ListProduct from './pages/listproduct/ListProduct'
import Orders from './pages/orders/Orders'
  import { ToastContainer } from 'react-toastify'

const App = () => {

  const url = "http://localhost:5000"
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className="app-content">
          <ToastContainer   position="top-center"/>
        <Sidebar/>

        <Routes>
    <Route path='/add-product' element = {<AddProduct url = {url} /> }/>
    <Route path = '/list-product' element = {<ListProduct  url = {url}/>}  />
    <Route path='/orders' element = {<Orders url = {url}/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App