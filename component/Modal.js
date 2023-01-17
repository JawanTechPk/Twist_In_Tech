import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Input, Stack, TextField } from '@mui/material';
import Link from 'next/link';
import styles from '../styles/navbarCss.module.css'

import axios from 'axios';
import { apiHandle } from '../pages/config/apiHandle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export default function BasicModal(props) {

  const { avatarNames ,abc} = props



  const [open, setOpen] = React.useState(false);
  const [signOpen, setSignOpen] = React.useState(false);
  // const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userData, setUserData] = React.useState("")
  const [usercheck, setUsercheck] = React.useState("")
  // if(signOpen===true){
  //   setOpen(false)
  // }


  // const token =  AsyncStorage.getItem(token_storage_constants.AUTH_TOKEN)
  const [signUpdata, setSignUpData] = React.useState({
    userName: "",
    email: "",
    password: "",
  })
  const [loginData, setLoginData] = React.useState({
    email: "",
    password: "",
  })

  const signUp = () => {

    apiHandle().post("/signup", signUpdata).then((e) => {
      console.log("okkkkkk", e);
      localStorage.setItem("token", e.data.tokens.access_token)

      setSignOpen(false)

      toast.success(e.data.message);
    }).catch(x => console.log(x))
    console.log(signUpdata);
  }


  const [avatarName, setAvatarName] = React.useState("")
  const [nameState, setNamestate] = React.useState("")

  

  const logIn = () => {
    let token = localStorage.getItem("token")

    apiHandle(token).post("/login", loginData).then((e) => {

      console.log("nameeeeee", e.data.user.split(0));
      setUsercheck(e.data.user.slice(0, 1))
      setNamestate(e.data.user);
      toast.success(e.data.message);
      setOpen(false);
      setSignOpen(false)
      localStorage.setItem("token", e.data.tokens.access_token)

      setUserData(localStorage.getItem("user"))
      localStorage.setItem("user", e.data.user)
      console.log('userData', userData.slice(0, 1));

    }).catch(x => console.log(x))
   
    abc()
  }
  // console.log(result);

  React.useEffect(() => {
    setUsercheck(localStorage.getItem("user"));

  }, [,userData])

  function stringAvatar(name) {
    let a = name.slice(0, 1)

    return { children: a }
  }
  return (
    <div>
      {usercheck ?
        <Stack direction={'row'} alignItems={'center'}>
          <Stack>
            <Button onClick={handleOpen}  ><Avatar   >{usercheck.slice(0,1)}</Avatar></Button>
          </Stack>
          <Stack>{usercheck}</Stack>
        </Stack>
        : <Button variant='contained' color='warning' onClick={handleOpen} >Start Chat</Button>}
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
                <TextField id="outlined-basic" onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} type='email' label="Email" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <TextField id="outlined-basic" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} type='password' label="Password" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <Button variant='contained' onClick={() => logIn()} color='warning' >Login</Button>
              </Stack>
              <Stack>
                <Link className={styles.link} onClick={() => setSignOpen(true)} href={'#'}>Create An Account</Link>

              </Stack>

            </Stack>
          </Typography>
        </Box>
      </Modal>
      {/* // SignUp Screen.js  //  */}
      {signOpen ? <Modal
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
                <TextField id="outlined-basic" onChange={(e) => { setSignUpData({ ...signUpdata, userName: e.target.value }) }} type='text' label="User Name" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <TextField id="outlined-basic" onChange={(e) => { setSignUpData({ ...signUpdata, email: e.target.value }) }} type='email' label="Email" variant="outlined" required color='warning' />
              </Stack>
              <Stack>
                <TextField id="outlined-basic" onChange={(e) => { setSignUpData({ ...signUpdata, password: e.target.value }) }} type='password' label="Password" variant="outlined" required color='warning' />
              </Stack>

              <Stack>
                <Button onClick={() => signUp()} variant='contained' color='warning' >Signup</Button>
              </Stack>
              <Stack>
                <Link className={styles.link} onClick={() => setSignOpen(false)} href={'#'}> Already Have an Account?</Link>

              </Stack>

            </Stack>
          </Typography>
        </Box>
      </Modal>
        : null}
    </div>
  );
}