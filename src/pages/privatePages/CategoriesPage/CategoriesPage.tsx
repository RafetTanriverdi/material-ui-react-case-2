import { Stack, Typography } from "@mui/material";
import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import AddNewCatgoriesButton from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCatgoriesButton";
import CategoriesList from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/CategoriesList";
import { RouteType } from "@rt/routes/routes";
import * as React from "react";
interface CategoriesPageProps {
  routeData: RouteType;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ routeData }) => {
  return (
    <>
   <DynamicHelmet title={routeData.title} />
      <Stack
        direction={"row"}
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Typography variant="h6" margin={"auto 0"}>
          Categories
        </Typography>
        <AddNewCatgoriesButton />
      </Stack>
      <CategoriesList />
    </>
  );
};

export default CategoriesPage;
