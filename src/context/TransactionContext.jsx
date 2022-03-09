import { createContext, useContext, useState } from "react";

const TransactionContext = createContext({});

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]); // Estado principal da aplicação

  // create transaction
  // update deletransaction
  // delete transaction
  // get transactions

  return (
    <TransactionContext.Provider value={{ transactions }}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransaction = () => useContext(TransactionContext);
