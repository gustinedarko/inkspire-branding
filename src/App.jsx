import { createBrowserRouter,RouterProvider } from "react-router"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import About from "./pages/About"
import Projects from "./pages/Projects"

const inkspireBrandingRouter = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: 'about', element: <About /> },
  { path: 'projects', element: <Projects /> },
  { path: '*', element: <NotFound /> },
])

export default function App() {

  return (
    <>
    <RouterProvider router={inkspireBrandingRouter} />
    </>
  )
}
