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
export const SendEmail = (props) => {
  const { emailAddress } = props;
  const {handleCloseEmail, openEmail, getUsersData,openNotificationWithIcon} = useContext(AppContext)
  const [emailMessage, setEmailMessage] = useState('')
  const [emailSubject, setEmailSubject] = useState('')
  const token = localStorage.getItem('vercel-toolbar-token');
  const handleEmailSubmit = async () => {
    const data = {emailMessage,emailAddress,emailSubject}
    console.log(data);
    if (!data) {
      return openNotificationWithIcon('error', 'Failed Operation', 'Please fill the data');
    }
    await axios.post('https://al-arqam-banckend.vercel.app/api/send-email',
      data,
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    )
    .then((response)=>{
      getUsersData()
      handleCloseEmail()
      openNotificationWithIcon('success', 'Success Operation', 'Email sent')
      console.log("Request succeeded:", response);
    })
    .catch((error)=>{
      openNotificationWithIcon('error', 'Failed Operation', 'Please fill the data')
      console.error("Request failed:", error.response?.data || error.message);
    })
  };
  return (
    <>
      <Dialog
        open={openEmail}
        onClose={handleCloseEmail}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleCloseEmail();
          },
        }}
      >
        <DialogTitle>Send Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To send an e-mail to this person , please enter your message here.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="emailMessage"
            name="emailMessage"
            label="Your Message"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setEmailMessage(e.target.value)}}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="emailSubject"
            name="emailSubject"
            label="Your email subject"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e)=>{setEmailSubject(e.target.value)}}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEmail}>Cancel</Button>
          <Button onClick={handleEmailSubmit}>Send</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
