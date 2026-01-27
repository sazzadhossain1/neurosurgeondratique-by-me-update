import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-regular-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./LayOut/Main";
import Home from "./components/Home/Home";
import PhotoGalleryInnerPage from "./components/PhotoGalleryInnerPage/PhotoGalleryInnerPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/photoGalleryInnerPage",
          element: <PhotoGalleryInnerPage></PhotoGalleryInnerPage>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
