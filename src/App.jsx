import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import Layout from "./components/Layout";
import ProjectDetails from "./components/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "work",
        children: [
          {
            index: true,
            element: <Work />,
          },
          {
            path: "nutflux",
            element: <ProjectDetails text="Nutflux" />,
          },
          {
            path: "kaamelott quotes",
            element: <ProjectDetails text="Kaamelott Quotes" />,
          },
          {
            path: "weather app",
            element: <ProjectDetails text="Weather App" />,
          },
          {
            path: "cocktail time",
            element: <ProjectDetails text="Cocktail Time" />,
          },
          {
            path: "trainee project",
            element: <ProjectDetails text="Trainee Project" />,
          },
          {
            path: "portfolio",
            element: <ProjectDetails text="Portfolio" />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
