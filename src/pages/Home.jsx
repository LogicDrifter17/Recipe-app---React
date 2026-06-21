import React, {  useContext, useEffect, useReducer, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {Recipe_Details}  from "../App.jsx"

const Home = () => { 
  
  let {My_Favorites , setMy_Favorites,Search,setSearch }=useContext(Recipe_Details)
  
    
     function reducer(state,action){
        switch(action.type){
    
          case "Watch_Input":
             return {...state,
                     Input : action.payload}
         
          case "Recipe" :
            return {...state,
                    Recipe : action.payload}
          case "Numbers" :
            return {...state,
                    Numbers : action.payload}
         
         
                   

                     
          default : 
             return {
                 ...state}
           
      
        }
     }
       let [state,dispatch]=useReducer(reducer,{
        Input : "",
        Recipe :[],
        Numbers :[],
        
       })
    
    useEffect(()=>{
       fetch(`https://dummyjson.com/recipes/search?q=${Search}`).then((result)=>{
           return result.json()
       }).then((Recipe)=>{
      
           dispatch( {type : "Recipe",
                      payload : Recipe.recipes
            })
            
          
       })
       var numbers = new Set()

while(numbers.size < 12){

   let random = Math.floor(Math.random() * 30)

   numbers.add(random)

}

numbers = [...numbers]

console.log(numbers)

     dispatch(  {type:"Numbers",
                 payload:numbers})
  
      
    
    },[Search])

     useEffect(()=>{
        localStorage.setItem("Favorites",JSON.stringify(My_Favorites))
     },[My_Favorites])
       
 
    let  NavRecipe = useNavigate() 

    
    
    
   
  if(Search === "")
    { var Recipe_arr =  state.Recipe.filter((Current_Element,Index)=>
        {
           return state.Numbers.includes(Index)
         })
    }
    else
    {
       var Recipe_arr =  [...state.Recipe]
    }
  
          
    
       
    
     
                     
    
  return (
    <div id="Home">
        <div id="Search_Box">

            
             <input id="Search" value={state.Input} onChange = {(e)=>dispatch(
            {
                type:"Watch_Input",
                payload:e.target.value
             }
             )}></input>
             <button onClick = {()=>{
                   setSearch(state.Input)
             }}>Search</button>
         
           
        </div>
         <div className="Recipe_Container">
            {

             Recipe_arr.map((Current_Element,Index)=>{ 
               const isliked = My_Favorites.includes(Current_Element.id);
                 return(<div key = {Index} id="Recipe" >
                    <img src= {Current_Element.image} />
                        
                  <center><p id="Element_Name">{Current_Element.name}</p></center>
                  <div id="Recipe_details"><span>rating : {Current_Element.rating}</span>
        <span>Review Count : {Current_Element.reviewCount}</span>
        <span>Cusine : {Current_Element.cuisine}</span>
        <span>Difficulty : {Current_Element.difficulty}</span></div>
                  <button  id ="Like_button" onClick ={()=>{
                
                  
                     setMy_Favorites((preval)=>{
                       if (!isliked){
                       if(preval.includes(Current_Element.id)){ 
                       
                        return preval;
                       
                       }
                        
                         return [...preval,Current_Element.id]
                      }
                        else {
                         let result = preval.filter((id)=>{
                        
                             return id !== Current_Element.id
                          })  
                           
                          return result
                        }
                     })
                    

                  }}>{isliked?<FaHeart/>:<FaRegHeart/>}</button>
                             
                      
                    <button id="veiw_full_recipe"onClick = {()=>{
                           NavRecipe(`/Recipe/${Current_Element.id}`)
                          
                    }}>Veiw Full Recipe</button>
                    </div>)

             })
            }
        
            </div>

    </div>
    
  )
}

export default Home