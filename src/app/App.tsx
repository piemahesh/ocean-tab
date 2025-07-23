import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { MyProvider, ToasterProvider } from "../features";

export const App = () => {
  return (
    <MyProvider>
      <ToasterProvider />
      <RouterProvider router={routes} />
    </MyProvider>
  );
};
