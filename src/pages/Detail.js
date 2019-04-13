import React from "react";

import { firestoreService } from "../firebase";

const DetailPage = ({ username }) => {
  firestoreService.getPool(username).then(value => console.log("value", value));

  return (
    <div>
      <p>DetailPage</p>
    </div>
  );
};

export default DetailPage;
