import { Button, Dialog, DialogContent } from '@material-ui/core';
import React, { useState } from 'react';

function DetailsPost(props) {
    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(!false);
    };
    const handleClose = ()=>{
        setOpen(false)
    }
  //créer les routes pour images et appelle api ici
    return (
        <div>
           <Button onClick={handleClickOpen} >
               See more
           </Button>
           <Dialog open={open} onClose={handleClose}>
               <DialogContent>
                   I am making it
               </DialogContent>
           </Dialog>
        </div>
    );
}

export default DetailsPost;