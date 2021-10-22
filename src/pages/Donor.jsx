import React from "react";
import Cards from "../components/Cards";
import "../Style/Donor.css";
function Donor() {
  return (
    <div className="Donor">
      <h1> Welcome!! Your Donations can save the planet.</h1>
      <div className="don_list">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
      </div>
    </div>
  );
}

export default Donor;
