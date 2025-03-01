import { Outlet } from "react-router-dom";
import "./App.css";
import MainLayout from "@rt/layouts/MainLayout/MainLayout";
import { Amplify } from "aws-amplify";
import awsmobile from "@rt/aws-exports";
import ContextIndex from "@rt/context_tp/Index";

Amplify.configure(awsmobile);

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
