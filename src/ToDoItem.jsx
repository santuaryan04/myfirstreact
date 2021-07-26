import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
const ToDoItem = (props) =>{

    return (
        <>
        <li>{props.text} </li><Button onClick={()=>{
            props.onSelect(props.id)
        }}> <DeleteIcon/> </Button>
        </>
    )
}

export default ToDoItem;