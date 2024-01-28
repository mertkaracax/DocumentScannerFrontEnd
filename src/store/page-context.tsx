import React, { useState, PropsWithChildren } from 'react';

type PageContextObject = {
  pageNumber: number;
  changePage: (pageNum: number) => void;
};

export const PageContext = React.createContext<PageContextObject>({
  pageNumber: 1,
  changePage: (pageNum: number) => {},
});

const PageContextProvider: React.FC<PropsWithChildren> = (props) => {
  const [pageNumber, setPageNumber] = useState<number>(1);

  const changePageHandler = (pageNumber: number) => {
    setPageNumber(() => {
      return pageNumber;
    });
  };

  const contextValue: PageContextObject = {
    pageNumber: pageNumber,
    changePage: changePageHandler,
  };

  return (
    <PageContext.Provider value={contextValue}>
      {props.children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
