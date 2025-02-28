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
      <CategoriesList />
    </>
  );
};

export default CategoriesPage;
