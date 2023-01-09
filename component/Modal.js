import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Input, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/navbarCss.module.css'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 400,
  width: '100%',
  maxHeight: 450,
  height: '100%',
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  // boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const [signOpen, setSignOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
// if(signOpen===true){
//   setOpen(false)
// }
  return (
    <div>
      <Button onClick={handleOpen}><Avatar>L</Avatar></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={'bold'} color='#f89500' >
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack spacing={3} >

              <Stack>
                <TextField id="outlined-basic" type='email' label="Email" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <TextField id="outlined-basic" type='password' label="Password" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <Button variant='contained' color='warning' >Login</Button>
              </Stack>
              <Stack>
                <Link className={styles.link} onClick={()=>setSignOpen(true)} href={'#'}>Create An Account</Link>

              </Stack>

            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* // SignUp Screen.js  //  */}
  { signOpen?    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h5" component="h2" fontWeight={'bold'} color='#f89500' >
            Signup
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Stack spacing={3} >

              <Stack>
                <TextField id="outlined-basic" type='text' label="User Name" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <TextField id="outlined-basic" type='email' label="Email" variant="outlined" required color='warning' />
              </Stack>
              <Stack>
                <TextField id="outlined-basic" type='password' label="Password" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <Button variant='contained' color='warning' >Signup</Button>
              </Stack>
              <Stack>
                <Link className={styles.link} onClick={()=>setSignOpen(false)} href={'#'}> Already Have an Account?</Link>

              </Stack>

            </Stack>
          </Typography>
        </Box>
      </Modal>
    :null}
    </div>
  );
}