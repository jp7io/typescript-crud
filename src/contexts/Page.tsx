import { createContext, useContext, useState } from 'react';

export enum Page {
  Articles = 'Articles',
  Authors = 'Authors',
}

type ContextType = {
  page: Page;
  setPage: (page: Page) => void;
};

const Context = createContext<ContextType>({
  page: Page.Articles,
  setPage: (page) => console.warn('no page provider'),
});

export const usePage = () => useContext(Context);

type PageStoreProps = {
  children: React.ReactNode;
};

export const PageStore: React.FC<PageStoreProps> = ({ children }) => {
  const [page, setPage] = useState(Page.Articles);
  return (
    <Context.Provider value={{ page, setPage }}>{children}</Context.Provider>
  );
};
