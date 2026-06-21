import React, { useContext, useEffect,  } from 'react'
import {Recipe_Details} from "../App.jsx"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FavoriteRecipe = () => {
  let NavRecipe = useNavigate()
  let [My_Favorites_Recipe_Array, setMy_Favorites_Recipe_Array]= useState([]);
  let {My_Favorites} =  useContext(Recipe_Details); 
    console.log(My_Favorites);
    useEffect(()=>{
      setMy_Favorites_Recipe_Array([])
        if( My_Favorites[0]){
       for(let i of My_Favorites){
        
         fetch(`https://dummyjson.com/recipes/${i}`).then((resolve)=>{
                 return resolve.json()
         }).then((data)=>{
              console.log(data);
              setMy_Favorites_Recipe_Array((preval)=>{
                 return [...preval,data]
              });
         })
       }
      }

    },[My_Favorites])
  
  return (
    <div id="Favorite_Recipe_Container" className='Recipe_Container'>
        {
          My_Favorites_Recipe_Array?.map((Current_Element,Index)=>{
                           return(<div key = {Index} id="Recipe" >
                               
                              <img src= {Current_Element.image} />
                                  
                            <center><p id="Element_Name">{Current_Element.name}</p></center>
                            <div id="Recipe_details"><span>rating : {Current_Element.rating}</span>
        <span>Review Count : {Current_Element.reviewCount}</span>
        <span>Cusine : {Current_Element.cuisine}</span>
        <span>Difficulty : {Current_Element.difficulty}</span></div>
                          
                                       
                                
                              <button id="veiw_full_recipe"onClick = {()=>{
                                     NavRecipe(`/Recipe/${Current_Element.id}`)
                                    
                              }}>Veiw Full Recipe</button>
                              </div>)
          
                       })
                      }
    </div>
  )
}

export default FavoriteRecipe