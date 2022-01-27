import React, { useState } from 'react';



const GroceryForm = () => {
  const[item, setItem] = useState('item');
  const[number, setNumber] = useState('0');
  const[grocery, setGroceries] = useState();

  const onSubmit:any = (e:any):void =>{
   e.preventDefault();
  }

  return(
     <form>
       <label>
         Food Name:
         <input
         type="text"
         value={item}
         onChange={e => setItem(e.target.value)}/>
       </label>
        Ammount:
        <input
        type='number'
        value={number}
        onChange={e => setNumber(e.target.value)}
        />

        <button type="submit" onClick={onSubmit}>Submit</button>
     </form>
  )

}

export default GroceryForm