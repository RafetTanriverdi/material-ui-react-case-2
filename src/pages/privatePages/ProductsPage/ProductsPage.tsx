import { Stack, Typography } from "@mui/material";
import { DynamicHelmet } from "@rt/components/Helmet/Helmet";
import AddNewProductsButton from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsButton";
import ProductsList from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/ProductsList";
import { RouteType } from "@rt/routes/routes";
import React from "react";

interface ProductsPageProps {
  routeData: RouteType;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ routeData }) => {
  return (
    <>
      <DynamicHelmet title={routeData.title} />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignContent={"center"}
      >
        <Typography variant="h6" margin={"auto 0"}>
          Products
        </Typography>
        <AddNewProductsButton />
      </Stack>
      <ProductsList />
    </>
  );
};

export default ProductsPage;
