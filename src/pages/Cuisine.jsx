import React, { useContext, useEffect, useState } from 'react'
import { Recipe_Details } from '../App'
import { useNavigate } from 'react-router-dom'

const Cuisine = () => {
  let Navigate = useNavigate()
  let[Cuisine,setCuisine]=useState([])
 let {Search,setSearch}= useContext(Recipe_Details)
    useEffect(()=>{
      fetch('http://localhost:5000/cuisines').then((resolve)=>{
          return resolve.json()
      }).then((data)=>{
        console.log(data);
        setCuisine(data);
      })
    },[])
    return(
      <div id="Cuisine">{
        Cuisine.map((Current_Element,Index)=>{
              return(<button key={Index} id ="Cuisine_Card" onClick={()=>{
                  Navigate("/");
              console.log(Current_Element.name);
              setSearch(Current_Element.name);
              }}>{Current_Element.name}</button>)
        })
      }
      </div>
    )
}

export default Cuisine