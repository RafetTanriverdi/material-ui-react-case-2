import { useState } from "react";
import { RTButton } from "@rt/components/Buttons/Index";
import StyledDrawer from "@rt/components/Drawer/Drawer";
import AddNewProductsPanel from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsPanel";
import { useAdd } from "@rt/hooks/crudFunctions/useAdd";
import { ENDPOINTS } from "@rt/api/end-points";
import { useGlobalSnackbar } from "@rt/context/GlobalSnackbarProvider/GlobalSnackbarProvider";
import { Product } from "@rt/pages/privatePages/ProductsPage/page-components/AddNewProducts/AddNewProductsButton";

export interface AddNewProductsDrawerProps {
  open: boolean;
  onClose: () => void;
}

const AddNewProductsDrawer: React.FC<AddNewProductsDrawerProps> = ({
  open,
  onClose,
}) => {
  const { showSnackbar } = useGlobalSnackbar();

  const [product, setProduct] = useState<Product>({
    productName: "",
    description: "",
    stock: "",
    price: "",
    categoryName: "",
  });

  const { addMutation } = useAdd<Product>({
    endpoint: ENDPOINTS.PRODUCTS.CREATE,
    invalidationKey: "products",
    onSuccess: () => {
      showSnackbar("Product successfully added!", "success");
      onClose();
    },
    onError: (error) => {
      showSnackbar(`Product creation failed! ${error.message}`, "error");
    },
  });

  return (
    <>
      <StyledDrawer
        title="Add New Product"
        open={open}
        onClose={onClose}
        content={
          <AddNewProductsPanel setProduct={setProduct} product={product} />
        }
        footer={
          <RTButton.add
            disabled={addMutation.isPending}
            loading={addMutation.isPending}
            onClick={() => addMutation.mutate(product)}
          >
            Add Product
          </RTButton.add>
        }
      />
    </>
  );
};

export default AddNewProductsDrawer;
