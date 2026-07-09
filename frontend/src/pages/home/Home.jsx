import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/exploremenu/ExploreMenu'
import ToyDisplay from '../../components/toydisplay/ToyDisplay';
import AppDownload from '../../components/appdownload/AppDownload';
import Blog from '../../components/blog/Blog';


const Home = () => {
 const [category,setCategory] = useState('all');
 console.log(category)

  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} setCategory = {setCategory}/> 
      <ToyDisplay  category = {category}/>
      <Blog/>
    </div>
  )
}

export default Home