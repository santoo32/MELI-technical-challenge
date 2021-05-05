import React from "react";
import "./breadcrumbs.scss";

const Breadcrumbs = ({ categories }) => {

  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb">
        {categories.map((cat, index) => {
        const lastCat = index === categories.length - 1; 
          return lastCat ?  <li key={cat.id} className="last-item">{cat.name}</li>
           : <li key={cat.id}>{cat.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
