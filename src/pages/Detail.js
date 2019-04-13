import React, { useEffect, useState } from "react";

import { firestoreService } from "../firebase";

const DetailPage = ({ username }) => {
  const [pool, setPool] = useState();

  useEffect(() => {
    const fetchPool = async () => {
      const result = await firestoreService.getPool(username);
      setPool(result);
    };

    fetchPool();
  }, {});

  return (
    <div>
      <pre>
        <code>{JSON.stringify(pool)}</code>
      </pre>
    </div>
  );
};

export default DetailPage;
