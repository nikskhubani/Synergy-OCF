// import Button from "@mui/material/Button";
import { Box, Button, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

type SuccessModalProps = {
  open: boolean;
  id: string;
};

export default function SuccessModal({open, id}: SuccessModalProps) {
  const [copied, setCopied] = useState(false)

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Form saved successfully"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Here is the shareable link to the saved form.
        </DialogContentText>

        <Box sx={{display: 'flex', alignItems: 'center', py: 1 }}>
          <Typography variant="body2" component="p">
            {`${location.href}${id}`}
          </Typography>
          <CopyToClipboard text={`${location.href}${id}`}
            onCopy={() => setCopied(true)}>
            <Button sx={{ml: 2}} variant="contained">{copied ? 'Copied' : 'Copy'}</Button>
          </CopyToClipboard>
        </Box>
      </DialogContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Disagree</Button>
        <Button onClick={handleClose} autoFocus>
          Agree
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
