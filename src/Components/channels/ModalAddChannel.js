import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import db from '../../misc/firebase';

export default function ModalAddChannel({open, handleClose}) {

    const [input, setInput] = useState('');
    const addChannel = () => {
        db.collection('channels').add({
            name: input
        })
        handleClose();
    }

  
  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Ajouter une chaîne</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Nom de la chaîne
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Chaîne"
            type="text"
            fullWidth
            value = {input}
            onChange={(event) => setInput(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="danger">
            Annuler
          </Button>
          <Button onClick={addChannel} color="primary">
            Ajouter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
