import { createContext, useState } from "react";
import { Customer } from "../interfaces/customer-interface";

export type CustomerContextType = {
  customers: Customer[];
  getCustomers: (customers: Customer[]) => any;
  getCustomerById: (id?: number) => any;
};

export const CustomerContext = createContext<CustomerContextType | null>(null);

const CustomerContextProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [customers, setCustomer] = useState<Customer[]>([]);

  const getCustomers = (customer: Customer[]) => {
    setCustomer([...customer]);
  };

  const getCustomerById = (id?: number) => {
    const getCustomer = customers.filter(
      (customer: Customer) => customer.id === id
    );
    return getCustomer[0];
  };

  return (
    <CustomerContext.Provider
      value={{ customers, getCustomers, getCustomerById }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
