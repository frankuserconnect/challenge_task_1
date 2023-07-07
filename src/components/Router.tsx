import { createContext, useEffect, useState } from "react";

interface RouterProps {
  children: React.ReactNode;
}

interface RouterContextType {
  push: (path: string) => void;
  currentPath: string;
}

// create context for route
const RouterContext = createContext<RouterContextType | null>(null);

const Router = ({ children }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopstate = () => {
      setCurrentPath(location.pathname);
    };

    window.addEventListener("popstate", handlePopstate);

    return () => {
      window.removeEventListener("popstate", handlePopstate);
    };
  }, []);

  const push = (path: string) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ push, currentPath }}>
      {children}
    </RouterContext.Provider>
  );
};

export { RouterContext };

export default Router;
