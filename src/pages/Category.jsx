import React, { use, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Recipe_Details } from '../App'

const Category = () => {
 let {Search,setSearch} = useContext(Recipe_Details)

   let Navigate = useNavigate()
  function fetch_Category(Current_Element){
     ;
      

  }
  let[Category,setCategory]=useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/categories').then((resolve)=>{
        return resolve.json()
    }).then((data)=>{
      console.log(data);
      setCategory(data);
    })
  },[])
  return(
    <div id="Category">{
      Category.map((Current_Element,Index)=>{
            return(<button key={Index} id="Category_Card"onClick={()=>{ 
              Navigate("/");
              console.log(Current_Element.name);
              setSearch(Current_Element.name);
            }}>{Current_Element.name}</button>)
      })
    }
    </div>
  )
}

export default Category