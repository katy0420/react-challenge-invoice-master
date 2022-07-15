import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CustomerDetail from "../CustomerDetail/CustomerDetail";
import { Customer } from "../../interfaces/customer-interface";
import classes from './ConfirmationModal.module.css';


interface ConfirmationProps {
  customer: Customer;
  setConfirmation: any;
}

const ConfirmationModal = (props: ConfirmationProps) => {
  const [open, setOpen] = React.useState(true);
  const customer = props.customer;
  const handleClose = () => {
    setOpen(false);
    props.setConfirmation(false);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("customer", customer);
    handleClose();
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.main}>
          <Typography>Please Confirm the follow information:</Typography>
          <br></br>
          <CustomerDetail customer={customer} />
          <br></br>
          <Button className={classes.btn} onClick={handleSubmit}>Confirm</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ConfirmationModal;
