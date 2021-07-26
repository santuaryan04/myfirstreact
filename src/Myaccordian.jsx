import React,{useState} from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

 const Myaccordian = ({name,description}) => {
    // const [show, setshow] = useState(false);
     return (
        <>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={{color:'red'}}>{name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <em>{description}</em>
          </Typography>
        </AccordionDetails>
      </Accordion>
        
            
        </>
    )

     }
    

export default Myaccordian;