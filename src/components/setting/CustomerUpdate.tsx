import { useState, useEffect, useRef } from "react";
import { Card } from "@mui/material";
import { Customer } from "../../interfaces/customer-interface";
import classes from "./CustomerUpdate.module.css";
import ConfirmationModal from "../modal/ConfirmationModal";

interface SettingProps {
  customer: Customer;
}
const Setting = (props: SettingProps) => {
  const customer = props.customer;
  const [detail, setDetail] = useState<Customer>(customer);
  const [confirmation, setConfirmation] = useState(false);

  const handleOnChange = (key: string, value: string) => {
    setDetail({ ...detail, [key]: value } as Customer);
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    setConfirmation(true);
  };

  return (
    <Card>
      <form onSubmit={handleOnSubmit}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            required
            id="name"
            value={detail.name}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            id="email"
            value={detail.email}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="channel">Channel</label>
          <select
            name="channel"
            id="channel"
            value={detail.channel}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          >
            <option value="website">Website</option>
            <option value="email">email</option>
            <option value="phone">Phone</option>
            <option value="wom">Word-of-mouth</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            required
            id="address"
            value={detail.address}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="postal">Postal</label>
          <input
            type="text"
            required
            id="postal"
            value={detail.postal}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="province">Province</label>
          <input
            type="text"
            required
            id="province"
            value={detail.province}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="province">Country</label>
          <input
            type="text"
            required
            id="country"
            value={detail.country}
            onChange={(e) => handleOnChange(e.target.id, e.target.value)}
          ></input>
        </div>
        <div className={classes.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>

      {confirmation && (
        <ConfirmationModal
          customer={detail}
          setConfirmation={setConfirmation}
        />
      )}
    </Card>
  );
};

export default Setting;
