import React, { use, useContext, useEffect, useReducer } from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
const Recipe = () => {
    let {id} = useParams();
    let [state,dispatch]=useReducer(reducer,{Recipe_Detail : {} })
    function reducer(state,action){
         switch(action.type){
             case "Recipe_full_detail":
                 return {...state, Recipe_Detail : action.payload}
         }
    }
  
    useEffect(()=>{
         fetch(`https://dummyjson.com/recipes/${id}`).then((recived_data)=>{
        return recived_data.json()
    }).then((Recipe_full_detail) =>{
        console.log(Recipe_full_detail);
        dispatch({
            type : "Recipe_full_detail",
            payload :Recipe_full_detail
        })

        
    })
    },[id])
    
  return (
   <div id="Full_Recipe_Details_Container">
      <div id="Recipe_img_name">
        <img src={state.Recipe_Detail.image}/>
      
         <h1>{state.Recipe_Detail.name}</h1>
    
      </div>
      <div id="Recipe_General_Details"> 
        <span>rating : {state.Recipe_Detail.rating}</span>
        <span>Review Count : {state.Recipe_Detail.reviewCount}</span>
        <span>Cusine : {state.Recipe_Detail.cuisine}</span>
        <span>Difficulty : {state.Recipe_Detail.difficulty}</span>
      </div>
      <div id="Recipe_Cooking_Details"> 
         
        <span>Preparation Time : {state.Recipe_Detail.prepTimeMinutes}</span>
        <span>Cooking Time : {state.Recipe_Detail.cookTimeMinutes}</span>
        <span>Calories : {state.Recipe_Detail.caloriesPerServing}</span>
      </div>
       <div id="Recipe_Ingredients"> 
              <center><h3>Ingredients</h3></center> 

       { state.Recipe_Detail.ingredients?.map((Current_Element,Index)=>{
               return(<li key={Index}>{Current_Element}</li>)
        })} 
        </div>
          
         <div id="Recipe_Instructions"> 
          <center><h3>Instructions</h3></center>
             { state.Recipe_Detail.instructions?.map((Current_Element,Index)=>{
               return(<li key={Index}>step :{Index + 1} {Current_Element}</li>)
        })}
         </div>
       
      
   </div>
  )
}

export default Recipe