import React, { useState } from "react";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import { useEdit } from "@rt/hooks/crudFunctions/useEdit";
import { ENDPOINTS } from "@rt/api/end-points";
import { RTButton } from "@rt/components/Buttons/Index";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { ProductList } from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/ProductsList";
import { Product } from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsButton";
import EditProductsPanel from "@rt/pages/privatePages/ProductsPage/page-components/ProductsList/Panels/EditProductsPanel";

interface EditProductsDrawerProps {
  open: boolean;
  onClose: () => void;
  data: ProductList;
}

const EditProductsDrawer: React.FC<EditProductsDrawerProps> = ({
  open,
  onClose,
  data,
}) => {
  const { categoryName, description, price, productName, stock } = data;
  const { showSnackbar } = useGlobalSnackbar();
  const [product, setProduct] = useState<Product>({
    categoryName,
    description,
    price,
    productName,
    stock,
  });

  const { editMutation } = useEdit<Product>({
    endpoint: ENDPOINTS.PRODUCTS.UPDATE.replace(":productId", data.productId),
    invalidationKey: "products",
    onSuccess: () => {
      showSnackbar("Product successfully edited!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Product edit failed! ${error.message}`, "error");
    },
  });

  return (
    <StyledDrawer
      title={`Edit Product: ${data.productName}`}
      open={open}
      onClose={onClose}
      content={
        <EditProductsPanel setProduct={setProduct} product={product} />
      }
      footer={
        <RTButton.add
          disabled={editMutation.isPending}
          loading={editMutation.isPending}
          onClick={() => editMutation.mutate(product)}
        >
          Edit Product
        </RTButton.add>
      }
    />
  );
};

export default EditProductsDrawer;
