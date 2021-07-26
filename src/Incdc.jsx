import React ,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
//import Container from '@material-ui/core/Container';
//import Typography from '@material-ui/core/Typography';
//import Card from '@material-ui/core/Card';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
root:{
    '& > *':{
        margin: theme.spacing(5),
    }
}

}))

const Incdc = () => {

    const [value,setValue] = useState(0);
    const [valueData,setValueData] = useState("");

    useEffect(() => {
        setValueData(`You clicked ${value} times`);
    },[value]);
const IncNum = () =>{
    setValue(value+1);
}
const DcNum = () =>{
    if(value > 0){
    setValue(value-1);
} else {
    alert('value:zero reached');
}
}
const classes = useStyles();
    return (
        <>
            <div className={classes.root}>
         
         <div style={{textAlign:'center'}}>
            <h1>{valueData}</h1>
            <Tooltip title="Add" aria-label="add">
            <Button variant="contained" color="primary" onClick={IncNum}><AddIcon /></Button>
            </Tooltip>

            <Tooltip title="Delete" >
                 <Button variant="contained" color="secondary" onClick={DcNum}><DeleteIcon/></Button>
                 </Tooltip>
        </div>
        
        </div>
        </>
    )
}
export default Incdc;