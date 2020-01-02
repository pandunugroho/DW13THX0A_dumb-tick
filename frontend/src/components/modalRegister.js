import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal, SimpleModal, Button, TextField } from '@material-ui/core/';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: 'pink',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ModalRegister() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Register
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Register</h2>
          <TextField id="standard-basic" label="Name" fullWidth />
          &nbsp;
          <TextField id="standard-basic" label="Username" fullWidth />
          &nbsp;
          <TextField id="standard-basic" label="Email" fullWidth />
          &nbsp;
          <TextField id="standard-basic" label="Password" fullWidth />
          &nbsp;
          <Button fullWidth>Register</Button>
        </div>
      </Modal>
    </div>
  );
}
