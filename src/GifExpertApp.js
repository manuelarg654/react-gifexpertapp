import React, { useState } from "react";

import {AddCategory} from './components/AddCategory.js';
import { GifGrid } from "./components/GifGrid.js";

export const GifExpertApp = () => {

//   const cats = ["One punch", "Samurai X", "Dragon Ball"];

  const [categories, setCategories] = useState(["One punch"]);


    const handleAdd = () =>{

        // setCategories( [...setCategories,'hunterXhunter'] );
        // setCategories( cats => [...cats, 'hunterXhunter' ] );

    }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <br />

      {/* <button onClick={ handleAdd }>Agregar</button> */}
      
      <ol>
          { 
          
          categories.map((category)=>{


              return <GifGrid key={category} category={category} />

          })

          }
      </ol>

    </>
  );
};
