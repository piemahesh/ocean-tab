// import { createBrowserRouter } from "react-router-dom";
// import { MyCarousel } from "../features";

// export const routes = createBrowserRouter([
//   { path: "/", element: <MyCarousel /> },
// ]);
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../features/Home";
import { Course, SpecificCourse } from "../features/Course";
import { Mentor } from "../features/Mentor";
import { About } from "../features/About";
import { AlbumGallery, MyCarousel, SpecificAlbum } from "../features";
import { Demo } from "../features/Demo/Check";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MyCarousel />,
    children: [
      { path: "", element: <Home /> },
      { path: "course", element: <Course /> },
      {
        path: "gallery",
        element: <AlbumGallery />,
      },
      { path: "mentor", element: <Mentor /> },
      { path: "about", element: <About /> },
    ],
  },
  { path: "/course/:id", element: <SpecificCourse /> },
  {
    path: "gallery/:albumId",
    element: <SpecificAlbum />,
  },
  {
    path: "/check",
    element: <Demo />,
  },
]);
