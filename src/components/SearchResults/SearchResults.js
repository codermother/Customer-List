import React, { useEffect, useState } from "react";
import axios from "../../axios";
import PhoneIcon from "@mui/icons-material/Phone";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import "./SearchResults.scss";

function SearchResults({ searchText }) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const loadCustomers = async () => {
      const response = await axios.get("customer");
      setCustomers(response.data);
    };
    loadCustomers();
  }, []);

  const filteredCustomers = customers.filter((customer) => {
    if (searchText === "") {
      return customers === [];
    } else if (
      customer.fullName &&
      customer.fullName.toLowerCase().includes(searchText.toLowerCase())
    ) {
      return customer;
    } else if (customer.policy && customer.policy.includes(searchText)) {
      return customer;
    }
    return false;
  });

  return (
    <div className="container">
      {filteredCustomers.map(
        (customer, key) =>
          customer.fullName && (
            <div
              key={customer.id}
              className="row border d-flex align-items-center justify-content-center customer-row"
            >
              <div className="fonts">{customer.fullName}</div>
              <div className="row d-flex align-items-center">
                <div className="col-lg-2 col-md-6 col-sm-12 p-0 small-font ">
                  <PhoneIcon className="me-1 fonts" />
                  {customer.phone}
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 small-font ps-0">
                  {" "}
                  @ {customer.email}
                </div>
                <div className="col-lg-6 col-sm-12 ps-0 d-flex align-items-center small-font">
                  <InsertDriveFileIcon className="me-1 fonts" />
                  Policy No. <span>{customer.policy}</span>
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default SearchResults;
