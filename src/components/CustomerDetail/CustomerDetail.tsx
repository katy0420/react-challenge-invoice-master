import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Customer } from "../../interfaces/customer-interface";

interface CustomerDetailProps {
  customer: Customer;
}

const CustomerDetail = (props: CustomerDetailProps) => {
  const { customer } = props;
  return (
    <Box>
      <Typography>Name: {customer.name}</Typography>
      <Typography>Email: {customer.email}</Typography>
      <Typography>Channel: {customer.channel}</Typography>
      <Typography>Address: {customer.address}</Typography>
      <Typography>Postal: {customer.postal}</Typography>
      <Typography>City: {customer.city}</Typography>
      <Typography>Province: {customer.province}</Typography>
      <Typography>Country: {customer.country}</Typography>
    </Box>
  );
}

export default CustomerDetail;
