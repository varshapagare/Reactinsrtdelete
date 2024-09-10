import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home";
import Insert from "./Components/Insert";
import Display from "./Components/Display";
import Search from "./Components/Search";
import Updata from "./Components/Updata";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="insert" element={<Insert/>}/>
      <Route path="display" element={<Display/>}/>
      <Route path="Search" element={<Search/>}/>
      <Route path="Update" element={<Updata/>}/>
     
      </Route>

    </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}
export default App;
