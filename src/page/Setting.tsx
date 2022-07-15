import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ConfirmationModal from "../components/modal/ConfirmationModal";
import CustomerUpdate from "../components/setting/CustomerUpdate";
import {
  CustomerContext,
  CustomerContextType,
} from "../store/customer-context";

const Setting = () => {
  const { id } = useParams();
  const customerCtx = useContext(CustomerContext) as CustomerContextType;
  const customer = customerCtx.getCustomerById(Number(id));
  const navigate = useNavigate();


  return (
    <Box>
      <CustomerUpdate customer={customer} />
      <Button onClick={() => navigate(-1)}> Back to Previous Page</Button>
    </Box>
  );
};

export default Setting;
