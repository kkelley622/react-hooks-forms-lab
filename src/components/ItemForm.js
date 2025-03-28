import React, { useState} from "react";
import { v4 as uuid } from "uuid";


function ItemForm({onItemFormSubmit}) {

  const [name, setName] = useState("")
  const [category, setCategory] = useState("Produce")

  function handleNameChange(event) {
    setName(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name ,
      category
    })
    // setName("")
    // setCategory("Produce")
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>Name:</label>
        <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        ></input>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange} value={category}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
