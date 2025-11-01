import Login from "./Login.jsx"
import Browser from "./Browse.jsx"
import { createBrowserRouter , RouterProvider} from "react-router-dom"
const Body = () => {
const appRouter = createBrowserRouter([
  {path : "/" , element : <Login/>}, {path : "/browse" , element : <Browser/>}])
 
    

return (
    <div><RouterProvider router={appRouter} /></div>
  )
}

export default Body