import {
  BrowserRouter,
  Route,
  Routes} from "react-router-dom";
import Feed from "./routes/Feed";
import Main from "./routes/Main";
import Profile from "./routes/Profile";



  function Router(){

    return <>
      <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Main/>}>
        </Route>
        <Route path ="/feed/*" element ={<Feed/>}>
        </Route>
        <Route path ="/profile/*" element ={<Profile/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  
  }
  
  export default Router;