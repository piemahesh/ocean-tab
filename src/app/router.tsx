// import { createBrowserRouter } from "react-router-dom";
// import { MyCarousel } from "../features";

// export const routes = createBrowserRouter([
//   { path: "/", element: <MyCarousel /> },
// ]);
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/Home";
import { Course, SpecificCourse } from "../features/Course";
import { Gallery } from "../features/Gallery";
import { Mentor } from "../features/Mentor";
import { About } from "../features/About";
import { MyCarousel } from "../features";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyCarousel />,
    children: [
      { path: "", element: <Home /> },
      { path: "course", element: <Course /> },
      { path: "gallery", element: <Gallery /> },
      { path: "mentor", element: <Mentor /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/course/:id", element: <SpecificCourse /> },
]);
