import React, {useContext, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { AppContext } from '../Context/getData';
import axios from 'axios';
export const AddUsers = () => {
  const {handleClose, open, getUsersData,openNotificationWithIcon} = useContext(AppContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const isSuperuser = false
  const token = localStorage.getItem('al-arqam-academy-chicago_authToken');
  const handleUsersSubmit = async () => {
    let userData = { username, password, isSuperuser};
    if (!username || !password) {
      return openNotificationWithIcon('error', 'Failed Operation', 'Please check the consent');
    }
    await axios.post('https://al-arqam-banckend.vercel.app/api/users',
      userData,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response)=>{
      getUsersData()
      handleClose()
      openNotificationWithIcon('Success', 'Success Operation', 'User has been created')
    })
    .catch((error)=>{
      openNotificationWithIcon('Fail', 'Fail Operation', 'Please Sure the data')
      return error.response?.data || error.message
    })
  };
  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            handleClose();
          },
        }}
      >
        <DialogTitle>Create New User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create new user to this dashboard, please enter your username and password
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="username"
            name="username"
            label="username"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setUsername(e.target.value)}}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="password"
            name="password"
            label="password"
            type="password"
            fullWidth
            variant="standard"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUsersSubmit}>Create User</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
