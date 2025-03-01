import { ENDPOINTS } from "@rt/api/end-points";
import { RTAlert } from "@rt/components/Alerts/Index";
import Description from "@rt/components/Description/Description";
import { RTLoading } from "@rt/components/Loading/Index";
import { useGet } from "@rt/hooks/crudFunctions/useGet";
import { ProductList } from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/ProductsList";
import React from "react";

interface ViewProductsPanelProps {
  data: ProductList;
}

const ViewProductsPanel: React.FC<ViewProductsPanelProps> = ({ data }) => {
  const { getQuery } = useGet({
    endpoint: ENDPOINTS.PRODUCTS.GET.replace(":productId", data.productId),
    queryKey: data.productName,
  });

  const { data: productData, isLoading, isError, error } = getQuery;

  if (isLoading) {
    return <RTLoading.desc variant="rectangular" />;
  }
  if (isError) {
    return <RTAlert.error message={error.message} />;
  }

  return (
    <Description
      data={[
        {
          label: "Product Name",
          value: productData.productName,
        },
        {
          label: "Product Description",
          value: productData.description,
        },

        {
          label: "Price",
          value: productData.price,
        },
        {
          label: "Category Name",
          value: productData.categoryName,
        },
        {
          label: "Stock",
          value: productData.stock,
        },
        {
          label: "Created Date",
          value: productData.createdAt,
        },
        {
          label: "Updated Date",
          value: productData.updatedAt,
        },
      ]}
      column={2}
      bordered
    />
  );
};

export default ViewProductsPanel;
