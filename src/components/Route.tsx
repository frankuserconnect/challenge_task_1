import { useContext } from "react";
import { RouterContext } from "./Router";

interface RouteProps {
  path: string;
  component: React.ReactNode;
}

const Route = ({ path, component }: RouteProps) => {
  const currentPath = useContext(RouterContext)?.currentPath;

  if (currentPath === path) return component;

  return null;
};

export default Route;
