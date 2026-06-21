
import './App.css'
import Home from './pages/Home'
import React, { createContext, useEffect, useState } from 'react'
import HomeNavBar from './components/HomeNavBar'
import About from './pages/About'
import Cuisine from './pages/Cuisine'
import Category from './pages/Category'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";
import Recipe from './components/Recipe'
import FavoriteRecipe from './pages/FavoriteRecipe'
export let Recipe_Details = createContext()

function App() {
   let [Recipe_Id,setRecipe_Id] = useState([])
 let [My_Favorites,setMy_Favorites]=useState(()=>{
     let initial_Value =localStorage.getItem("Favorites")
     return initial_Value?JSON.parse(initial_Value): []
 })
  let [Search,setSearch] = useState("")

    useEffect(()=>{
      fetch('https://dummyjson.com/recipes?limit=0&skip=0').then((resolve)=>{
        return resolve.json()
      }).then((data)=>{
               
            data.recipes.map((Current_Element,Index)=>{
                    
                 setRecipe_Id((old_arr)=>[...old_arr,Current_Element.id])
                    
            })
      

       })
    },[])

  return (
    <>
      
      <Recipe_Details.Provider value = {{Recipe_Id,My_Favorites,setMy_Favorites,Search,setSearch}}>
         <BrowserRouter>
         <div id="Pages">
           <HomeNavBar/>
        <Routes>  
          <Route path="/" element={<Home/>}/>
          <Route path="/Recipe/:id" element={<Recipe/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Category" element={<Category/>}/>
          <Route path="/Cuisine" element={<Cuisine/>}/>
          <Route path="/Myfavorites" element={<FavoriteRecipe/>}/>
          
        </Routes>
         <Footer/>
         </div>
      </BrowserRouter>

           
      </Recipe_Details.Provider>
     
    </>
  )
}

export default App
