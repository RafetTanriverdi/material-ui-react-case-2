import { Stack, Typography } from "@mui/material";
import AddNewProductsButton from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsButton";
import ProductsList from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/ProductsList";
import { RouteType } from "@rt/routes/routes";
import React from "react";
import { Helmet } from "react-helmet";

interface ProductsPageProps {
  routeData: RouteType;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ routeData }) => {
  return (
    <>
      <Helmet>
        <title>{routeData?.title}</title>
      </Helmet>
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
