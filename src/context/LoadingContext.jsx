import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  };

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        finishLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  return useContext(LoadingContext);
}
