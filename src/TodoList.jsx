import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
const TodoList = () => {
  const [items, setItem] = useState([]);
  const [inputList, setInputList] = useState("");
  const inputItem = (event) => {
    setInputList(event.target.value);
  };
  const AddItem = () => {
    setItem((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  const deleteItem = (id) => {
    setItem((oldItem) => {
        return oldItem.filter((existItem,index)=>{
            return id !== index;

        })
    })
  }
  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <div>
          <input
            type="text"
            placeholder="Enter an item"
            value={inputList}
            onChange={inputItem}
          />
          <Button onClick={AddItem}><AddIcon/></Button>
        </div>
        <div>
          <ul>
            {items.map((itemval,i) => {
              return <ToDoItem key={i} id={i} text={itemval} onSelect={deleteItem}/>;
            })}
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default TodoList;
