import React, { useEffect, useContext } from "react";

import { firestoreService } from "../firebase";
import { CharactersContext } from "../containers/CharacterContext";
import CharacterGrade from "../components/CharacterGrade";

const HomePage = ({ username = "" }) => {
  console.log("userName", username);
  const { dispatch } = useContext(CharactersContext);

  useEffect(() => {
    const fetchPool = async () => {
      const result = await firestoreService.getPool(username);
      if (result) {
        dispatch({
          type: "load",
          payload: result
        });
      }
    };

    fetchPool();
  }, []);

  return <CharacterGrade />;
};

export default HomePage;
