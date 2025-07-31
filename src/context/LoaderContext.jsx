import { createContext, useContext, useState } from "react";
import Loader from "../components/Loader";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000); // show loader for 3 seconds
  };

  return (
    <LoaderContext.Provider value={{ loading, showLoader }}>
      {loading && <Loader />}
      <div className={loading ? "overflow-hidden h-screen pointer-events-none" : ""}>
        {children}
      </div>
    </LoaderContext.Provider>
  );
}
