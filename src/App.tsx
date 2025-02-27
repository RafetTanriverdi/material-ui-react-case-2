import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "@rt/layouts/MainLayout/MainLayout";


function App() {
  return (
     
        <MainLayout>
        {/* <ul>
          <li>
            <a href="/">home</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
          <li>
            <a href="/register">register</a>
          </li>
          <li>
            <a href="/products">products</a>
          </li>
          <li>
            <a href="/categories">categories</a>
          </li>
        </ul> */}
          <Outlet />
        </MainLayout>
  );
}

export default App;
