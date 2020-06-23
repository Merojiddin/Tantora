import React, { FC, createContext, useContext } from 'react';
import rootStore, { RootStore } from 'stores/rootStore';

const StoreContext = createContext<RootStore>(rootStore);

export const StoreProvider: FC = ({ children }) => (
  <StoreContext.Provider value={rootStore}>{children}</StoreContext.Provider>
);

export default () => {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('Define `StoreProvider` higher up in the tree');
  }

  return store;
};
