import { createContext, useContext, useState } from "react";
import { useImmerReducer } from "use-immer";
import { dataReducer, initialDataState } from "../reducer/dataReducer";

const DataContext = createContext({
  dataState: {},
  dataDispatch: () => {},
});

export const DataProvider = ({ children }) => {
  const [dataState, dataDispatch] = useImmerReducer(
    dataReducer,
    initialDataState
  );
  const [currCategory, setCurrCategory] = useState(true);

  const dataContext = {
    dataState,
    dataDispatch,
    currCategory,
    setCurrCategory,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
