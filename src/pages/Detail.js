import React, { useEffect, useContext } from "react";

import { firestoreService } from "../firebase";
import { CharactersContext } from "../containers/CharacterContext";
import CharacterGrade from "../components/CharacterGrade";

const DetailPage = ({ username }) => {
  const { dispatch } = useContext(CharactersContext);

  useEffect(() => {
    const fetchPool = async () => {
      const result = await firestoreService.getPool(username);
      dispatch({
        type: "load",
        payload: result
      });
    };

    fetchPool();
  }, []);

  return <CharacterGrade />;
};

export default DetailPage;
