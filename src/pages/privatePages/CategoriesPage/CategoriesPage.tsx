import { Button } from "@mui/material";
import { RouteType } from "@rt/routes/routes";
import * as React from "react";
interface CategoriesPageProps {
  routeData: RouteType;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ routeData }) => {
  console.log(routeData);
  return (
    <>

    <Button>
      sdasda
    </Button>
    
      <div>CategoriesPage</div>
    </>
  );
};

export default CategoriesPage;
