import { useState, useEffect, useContext } from "react";
import { Customer } from "../interfaces/customer-interface";
import { AppService } from "../services/api.services";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CustomerDetail from "../components/CustomerDetail/CustomerDetail";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import {
  CustomerContext,
  CustomerContextType,
} from "../store/customer-context";
import { Box, Typography } from "@mui/material";
import classes from './Customers.module.css';


const Customers: React.FC<React.PropsWithChildren<unknown>> = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const appService = new AppService();
  const navigate = useNavigate();
  const customerCtx = useContext(CustomerContext) as CustomerContextType;

  useEffect(() => {
    setIsLoading(true);
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response: Customer[] | undefined = await appService.getCustomer();
    if(response === undefined){
        setError(true);
    }else if(response.length === 0){
        setError(true);
    }else{
        customerCtx.getCustomers(response);
    }
    setIsLoading(false);
  };

  const handleOnClick = (id: number) => {
    navigate(`/setting/${id}`);
  };

  return (
    <Box>
    {error?(
        <Typography>No Data is avilable</Typography>
    ):(<TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>Customer Detail</TableCell>
              <TableCell className={classes.title}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customerCtx && customerCtx.customers.map((row: Customer, key: number) => (
              <TableRow key={key}>
                <TableCell>
                  <CustomerDetail customer={row} />
                </TableCell>
                <TableCell>
                  <Button onClick={() => handleOnClick(row.id)}>Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>)
    }
    </Box>
  );
};

export default Customers;
