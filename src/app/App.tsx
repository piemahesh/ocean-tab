import { RouterProvider } from "react-router-dom";
import { routes } from "./router";
import { MyProvider } from "../features";

export const App = () => {
  return (
    <MyProvider>
      <RouterProvider router={routes} />
    </MyProvider>
  );
};
