import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import styles from '../styles/custom.module.css'


const style = {
  position: 'absolute',
  right: '45px',
  bottom: '60px',
//   transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  borderRadius:'2%',
  transitionDuration: '40s',
  transitionDelay: '20s'


};
import { Fab } from "@mui/material";
import { Component } from "react";
import EditIcon from '@mui/icons-material/Edit';
import { BsChatDotsFill } from 'react-icons/bs';

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}><Fab   color="warning" aria-label="edit">
    <BsChatDotsFill size={25} colo  />
  </Fab></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}