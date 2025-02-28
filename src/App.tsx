import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "@rt/layouts/MainLayout/MainLayout";
import { Amplify } from "aws-amplify";
import ContextIndex from "@rt/Context/Index";
import config from "./aws-exports";

Amplify.configure(config);

function App() {
  return (
    <MainLayout>
      <ContextIndex>
        <Outlet />
      </ContextIndex>
    </MainLayout>
  );
}

export default App;
