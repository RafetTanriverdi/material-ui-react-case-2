import { Stack, Typography } from "@mui/material";
import AddNewCatgoriesButton from "@rt/pages/privatePages/CategoriesPage/page-components/AddNewCategories/AddNewCatgoriesButton";
import CategoriesList from "@rt/pages/privatePages/CategoriesPage/page-components/CategoriesList/CategoriesList";
import { RouteType } from "@rt/routes/routes";
import * as React from "react";
import { Helmet } from "react-helmet";

interface CategoriesPageProps {
  routeData: RouteType;
}

const CategoriesPage: React.FC<CategoriesPageProps> = ({ routeData }) => {
  return (
    <>
      <Helmet>
        <title>{routeData?.title}</title>
      </Helmet>
      <Stack direction={"row"} justifyContent="space-between">
        <Typography variant="h6">Categories</Typography>
        <AddNewCatgoriesButton />
      </Stack>
      <CategoriesList />
    </>
  );
};

export default CategoriesPage;
