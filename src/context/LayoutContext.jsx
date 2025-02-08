import { createContext, useContext, useState } from "react";
import MainLayout from "../layouts/MainLayout";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [Layout, setLayout] = useState(MainLayout); // Default layout

  return (
    <LayoutContext.Provider value={{ Layout, setLayout }}>
      <Layout>{children}</Layout>
    </LayoutContext.Provider>
  );
};
export const useLayout = () => useContext(LayoutContext);
